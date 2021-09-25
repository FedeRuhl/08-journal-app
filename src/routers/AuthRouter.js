import React from 'react';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <Switch>
                    <Route exact path="/auth/login">
                        <LoginScreen />
                    </Route>
                    <Route exact path="/auth/register">
                        <RegisterScreen />
                    </Route>

                    <Redirect to="/auth/login" />
            </Switch>
            </div>
        </div>
    )
};

export default AuthRouter;
