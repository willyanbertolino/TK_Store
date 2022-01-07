const User = require('../models/User');
const Token = require('../models/Token');
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('../errors');
const {
  attachCookiesToResponse,
  createTokenUser,
  sendVerificationEmail,
} = require('../utils');
const crypto = require('crypto');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const verificationToken = crypto.randomBytes(40).toString('hex');

  const user = await User.create({ name, email, password, verificationToken });

  const origin = 'http://localhost:3000';

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  res.status(StatusCodes.CREATED).json({
    msg: 'Success! Please check your email to verify account',
  });

  // const tokenUser = createTokenUser(user);

  // attachCookiesToResponse({ res, user: tokenUser });

  // res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomAPIError.UnauthenticatedError('Verification failed');
  }

  if (user.verificationToken !== verificationToken) {
    throw new CustomAPIError.UnauthenticatedError('Verification failed');
  }

  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = '';

  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Email verified' });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomAPIError.BadRequestError(
      'Please provide email and password'
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomAPIError.UnauthenticatedError('Invalid credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!user.isVerified) {
    throw new CustomAPIError.UnauthenticatedError('Please verify your email');
  }

  if (!isPasswordCorrect) {
    throw new CustomAPIError.UnauthenticatedError('Invalid credentials');
  }

  const tokenUser = createTokenUser(user);

  // create refresh token
  let refreshToken = '';

  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomAPIError.UnauthenticatedError('Invalid Credentials');
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser });

    res.status(StatusCodes.OK).json({ user: tokenUser, refreshToken });

    return;
  }

  refreshToken = crypto.randomBytes(40).toString('hex');
  const userAgent = req.headers['user-agent'];
  const ip = req.ip;

  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser, refreshToken });
};

const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId });

  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged out' });
};

module.exports = { register, login, logout, verifyEmail };
