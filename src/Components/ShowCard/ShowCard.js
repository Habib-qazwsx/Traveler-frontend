import React from "react";
import "./ShowCard.css";
import { Button, Card, Col } from "react-bootstrap";

const ShowCard = (props) => {
  const { img, date, title, _id } = props.sendData;

  const handelBooking = (bookId) => {
    const booking = {bookId};
    console.log('clicked');
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
          <Button onClick={() => handelBooking(_id)} variant="primary">
            Book Now
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ShowCard;
