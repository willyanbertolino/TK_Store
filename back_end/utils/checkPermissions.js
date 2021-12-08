const CustomAPIError = require('../errors');

const checkPermissions = (reqUser, resourceUserId) => {
  if (reqUser.role === 'admin') return;

  if (reqUser.userId === resourceUserId.toString()) return;

  throw new CustomAPIError.UnauthorizedError(
    'Not authorized to access this route'
  );
};

module.exports = checkPermissions;
