import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const{signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>Please Login</h1>
            <Button onClick={signInUsingGoogle} variant="secondary">Google Signin</Button>
        </div>
    );
};

export default Login;