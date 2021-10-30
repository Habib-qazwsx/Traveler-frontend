import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import ShowBookingCard from './ShowBookingCard';

const BookingPackages = () => {
    const {user} = useAuth();
    const [bookingPackages, setBookingPackages] = useState([]);

    useEffect(()=>{      
        fetch('http://localhost:5000/bookingpackages')
        .then(res => res.json())
        .then(data => setBookingPackages(data));
    });
    
    return (
        <div id="bookingpackages">
            <h1> {user.displayName} Packages</h1>
            <h2>Email: {user.email}</h2>
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