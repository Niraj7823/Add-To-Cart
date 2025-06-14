import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/action/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart Projects</h2>
      <div className="row d-flex justify-content-center align-item-center">
        {data.map((element, index) => {
          return (
            <Card
              key={element.id || index}
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>Price:-{element.price}₹</Card.Text>
                <Card.Text>{element.address}</Card.Text>
                <Card.Text>Rating:-{element.rating}</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => send(element)}
                  >
                    Add to cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
