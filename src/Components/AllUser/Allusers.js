import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowUsers from './ShowUsers';

const Alluser = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://ghostly-dungeon-62726.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    });
    return (
        <div style={{textAlign:"center", marginTop:"40px", color:"darkcyan", backgroundColor:"darkkhaki"}}>
            <h1>Users</h1>
            <Row>
               {
                users.map(sendData =><ShowUsers
                    sendData={sendData}
                    key={sendData._id}
                ></ShowUsers>)
            }  
            </Row>
        </div>
    );
};

export default Alluser;