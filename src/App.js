import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import NotFound from './Components/NotFound/NotFound';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Path from './Components/Path/Path';

export const UserContext = createContext();

function App() {
  const[loggedinUser, setLoggedinUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
    <Router>
    <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/destination'>
          <Destination/>
        </Route>
        <PrivateRoute path='/path/:id'>
          <Path/>
        </PrivateRoute>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/content'>
          <Content/>
        </Route>
        <Route path='*'>
            <NotFound/>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
