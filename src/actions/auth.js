import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut  } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { noteLogout } from "./notes";
import { startLoading, finishLoading } from "./ui";
import { types } from "../types/types";
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(err => {
                if (err.code === 'auth/user-not-found')
                    Swal.fire('Error', 'User not found!', 'error');
                else if (err.code === 'auth/wrong-password')
                    Swal.fire('Error', 'User password is not valid!', 'error');
                dispatch(finishLoading());
            });
    };
};

export const startRegisterWithNameEmailPassword = (name, email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then( async({ user }) => {
                try
                {
                    await updateProfile(user, { displayName:name });
                    dispatch(
                        login(user.uid, user.displayName)
                    );
                }
                catch(err)
                {
                    console.log(err);
                }
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use')
                    Swal.fire('Error', 'Email is already in use!', 'error');
                else if (err.code === 'auth/invalid-email')
                    Swal.fire('Error', 'Email address is not valid!', 'error');
                else if (err.code === 'auth/weak-password')
                    Swal.fire('Error', 'Password is too weak!', 'error');                
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user: { displayName, uid } }) => {
                dispatch(
                    login(uid, displayName)
                )
            });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async( dispatch ) => {
        const auth = getAuth();
        await signOut(auth);

        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = () => ({ 
    type: types.logout
});