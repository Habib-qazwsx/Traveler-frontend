import React from "react";
import "./ShowCard.css";
import { Button, Card, Col } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const ShowCard = (props) => {
  const { img, date, title, _id } = props.sendData;
  const {user} = useAuth();

  const handelBooking = () => {

    fetch("https://ghostly-dungeon-62726.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({...props.sendData , email:user.email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("Booked");
        }
      });
  };
  return (
    <Col md={4}>
      <Card style={{ width: "24rem" }} className="showCard">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{date}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={handelBooking} variant="primary">
            Book Now
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ShowCard;
