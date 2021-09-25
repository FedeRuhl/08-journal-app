import React from 'react';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
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
