import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithNameEmailPassword } from '../../actions/auth';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [ values, handleInputChange ] = useForm({
        name: 'Name',
        email: 'email@example.com',
        password: '123123'
    });

    const { name, email, password } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid())
            dispatch(startRegisterWithNameEmailPassword(name, email, password));
    };

    const isFormValid = () => {
        if (name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        } else if (! validator.isEmail(email)) {
            dispatch(setError('Email is invalid'));
            return false;
        } else if (password.trim().length < 6) {
            dispatch(setError('Password is too weak'));
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form 
                onSubmit={ handleRegister }
                className="animate__animated animate_fadeIn animate__faster"
            >
                {
                    (msgError)
                        ?
                        (
                            <div className="auth__alert-error">
                                { msgError }      
                            </div>
                        )
                        : ''
                }
                
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <button
                    className="btn btn-primary btn-block mb-10"
                    type="submit"
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}

export default RegisterScreen
