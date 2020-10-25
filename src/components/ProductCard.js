import React from "react";
import { Button, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <Col xs={4} className="mb-3">
      <Card className="productCard h-100 d-flex flex-column">
        <Link
          to={`/product/${props.product.id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img variant="top" src={product.imgUrl}></Card.Img>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
        </Link>
        <Button
          className="mt-auto"
          title={`1 ${product.name} hozzáadása`}
          onClick={() =>
            props.addProduct(product.name, product.price, product.id)
          }
        >
          <i className="fa fa-shopping-cart"></i>
        </Button>
      </Card>
    </Col>
  );
};

export default ProductCard;
