import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const{signInUsingGoogle, setUser} = useAuth();
    const handelSignin=()=>{
        signInUsingGoogle()
        .then(result =>{
            setUser(result.user);
            const user = { name: result.user.displayName, email: result.user.email };
            fetch('https://ghostly-dungeon-62726.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
        })
    }
    return (
        <div style={{
            textAlign:"center",
            color:"blue",
            marginTop:"50px"
        }
        }>
            <h1>Please Login</h1>
            <Button onClick={handelSignin} variant="secondary">Google Signin</Button>
        </div>
    );
};

export default Login;