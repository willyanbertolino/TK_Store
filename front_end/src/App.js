import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import PrivateRoute from './pages/PrivateRoute';
import { AppProvider } from './utils/context';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Home />
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
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
