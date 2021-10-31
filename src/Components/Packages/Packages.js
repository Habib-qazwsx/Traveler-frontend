import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowCard from '../ShowCard/ShowCard';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://ghostly-dungeon-62726.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    });
 
    return (
        <div id="packages">
            <h1 style={{textAlign:"center", marginTop:"70px", marginBottom:"50px", color:"chocolate"}}>Our All Packages</h1>
            <Row>
               {
                packages.map(sendData =><ShowCard
                    sendData={sendData}
                    key={sendData._id}
                ></ShowCard>)
            }  
            </Row>
           
        </div>
    );
};

export default Packages;