import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Image } from "react-bootstrap";

const SingleProduct = (props) => {
  const productService = props.productService;
  const prodId = props.match.params.id;
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imgUrl: "",
  });

  useEffect(() => {
    const prod = productService.getProductById(prodId);
    console.log("prod", prod);
    setProduct(prod);
  }, [productService, prodId]);

  return (
    <Row className="productCard">
      <Col>
        <Image src={product.imgUrl}></Image>
      </Col>
      <Col>
        <Row className=" d-flex">
          <Col className="h1">{product.name}</Col>
          <Col className="h1">{product.price}</Col>
        </Row>
      </Col>
      <Col className="flex-column">
        <input defaultValue="1" id="quantity"></input>
        <Button
          size="lg"
          title={`${product.name} hozzáadása`}
          onClick={() =>
            props.addMoreProduct(
              product.name,
              product.price,
              product.id,
              document.getElementById("#quantity").innerHTML
            )
          }
        >
          <i className="fa fa-shopping-cart"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default SingleProduct;
