import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Admin,
  Home,
  Cart,
  About,
  Login,
  Signup,
  Checkout,
  SingleProduct,
  Products,
  Error,
  PrivateRoute,
  Love,
  Notifications,
  User,
} from './pages';

import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/love" exact>
          <Love />
        </Route>
        <Route path="/notifications" exact>
          <Notifications />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id" children={<SingleProduct />} />
        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
