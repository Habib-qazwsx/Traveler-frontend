import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import "./BookingPackages.css";
import ShowBookingCard from './ShowBookingCard';

const BookingPackages = () => {
    const {user} = useAuth();
    const [bookingPackages, setBookingPackages] = useState([]);

    useEffect(()=>{      
        fetch(`https://ghostly-dungeon-62726.herokuapp.com/mypackages/${user.email}`)
        .then(res => res.json())
        .then(data => setBookingPackages(data));
    });

    return (
        <div id="bookingpackages">
            <h1 className="bookingPackages"> {user.displayName}'s Packages</h1>
            <h2 className="bookingPackages">Email: {user.email}</h2>
            <Row>
               {
                bookingPackages.map(sendData =><ShowBookingCard
                    sendData={sendData}
                    key={sendData._id}
                ></ShowBookingCard>)
            }  
            </Row>
        </div>
    );
};

export default BookingPackages;