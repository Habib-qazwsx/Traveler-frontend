import React from 'react';

const ShowUsers = (props) => {
    const { name, email } = props.sendData;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
        </div>
    );
};

export default ShowUsers;