import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    const dispatch = useDispatch();

    const [waitingLogin, setWaitingLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));
            }
            else {
                setIsLoggedIn(false);
            }

            setWaitingLogin(false);

        });
    }, [ dispatch, setWaitingLogin, setIsLoggedIn ]);

    if (waitingLogin) {
        return (
            <h1>Wait...</h1>
        );
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={ isLoggedIn }
                        component={ AuthRouter }
                        path="/auth"
                    />
                    
                    <PrivateRoute 
                        isAuthenticated={ isLoggedIn }
                        component={ JournalScreen }
                        exact
                        path="/"
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;