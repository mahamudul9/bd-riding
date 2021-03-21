import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
    const[loggedinUser, setLoggedinUser]= useContext(UserContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedinUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRouter;