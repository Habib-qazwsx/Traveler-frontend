import React, { useEffect, useState } from "react";
import "../ShowCard/ShowCard.css";
import { Button, Card, Col } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const ShowBookingCard = (props) => {
  const {
    img,
    date,
    title,
    _id,
    email,
    packageIncludees,
    packageExcludes,
    optional,
  } = props.sendData;
  const { user } = useAuth();
  const [remainPackages, setRemainPackages] = useState([]);

  const deleteBooking = (id) => {

    console.log(id);
 
    const url = `https://ghostly-dungeon-62726.herokuapp.com/mypackages/${id}`;
    fetch(url, {
      method: 'DELETE'
  })
      .then(res => res.json())
      .then(data => {
          if (data.deletedCount) {
              const remaining = remainPackages.filter(user => user._id !== id);
              setRemainPackages(remaining);

              alert('deleted successfully');
          }
      });
  };

  return (
    <div>
      <Col md={6}>
        <Card style={{ width: "40rem" }} className="showBookingCard">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <b>Package:&nbsp;</b>
              {date}
            </Card.Text>
            <Card.Text>
              <b>Package Includes:&nbsp;</b>
              {packageIncludees}
            </Card.Text>
            <Card.Text>
              <b>Package Excludes:&nbsp;</b>
              {packageExcludes}
            </Card.Text>
            <Card.Text>
              <b>Optional:&nbsp;</b>
              {optional}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={()=>deleteBooking(_id)} variant="primary">
              Delete Booking
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default ShowBookingCard;
