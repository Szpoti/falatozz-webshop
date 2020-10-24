import React from "react";
import { Button, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <Row>
      <Col className="productCard m-3">
        <Row className="alignment">
          <Col xs={4} sm={3}>
            <a href={product.imgUrl} rel="noreferrer" target="_blank">
              <Image
                src={product.imgUrl}
                alt="image"
                width="100%"
                height="100%"
              ></Image>
            </a>
          </Col>
          <Col xs={3} sm={3} className="text-left" style={{ fontSize: "3vw" }}>
            {product.name}
          </Col>
          <Col
            xs={2}
            sm={3}
            className="h5 text-bottom "
            style={{ fontSize: "2vw" }}
          >
            {product.price}
          </Col>
          <Col xs={2} sm={3}>
            <Button size="lg" onClick={() => props.addProduct(product.name)}>
              <i className="fa fa-shopping-cart"></i>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductCard;
