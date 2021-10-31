import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowCard from '../ShowCard/ShowCard';


const HomePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://ghostly-dungeon-62726.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    });

    
    return (
        <div>
            <h1 style={{textAlign:"center", color:"chocolate", marginTop:"70px", marginBottom:"50px"}}>Our Packages</h1>
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