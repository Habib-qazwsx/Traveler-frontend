import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowCard from '../ShowCard/ShowCard';


const HomePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    });

    
    return (
        <div>
            <h1>Our Packages</h1>
            <Row>
               {
                packages.slice(0, 6).map(sendData =><ShowCard
                    sendData={sendData}
                    key={sendData._id}
                ></ShowCard>)
            }  
            </Row>
           
        </div>
    );
};

export default HomePackages;