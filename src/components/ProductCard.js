import React from "react";
import { Button, Col, Row, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <Col xs={4} className="mb-3">
      <Card className="productCard h-100">
        <Card.Img variant="top" src={product.imgUrl}></Card.Img>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
        <Button
          title={`1 ${product.name} hozzáadása`}
          onClick={() => props.addProduct(product.name)}
        >
          <i className="fa fa-shopping-cart"></i>
        </Button>
      </Card>
    </Col>
  );
};

export default ProductCard;
