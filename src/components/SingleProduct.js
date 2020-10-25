import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Image,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const SingleProduct = (props) => {
  const productService = props.productService;
  const prodId = props.match.params.id;
  const [quantity, setQuantity] = useState(1);
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
        <Form>
          <Fragment>
            <Form.Label htmlFor="quantity" srOnly>
              Quantity
            </Form.Label>
            <InputGroup className="mb-2 mr-sm-2">
              <FormControl
                id="quantity"
                defaultValue="1"
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </InputGroup>
          </Fragment>
          <Button
            size="lg"
            title={`${product.name} hozzáadása`}
            onClick={() =>
              props.cartService.addMoreProduct(
                product.name,
                product.price,
                product.id,
                quantity
              )
            }
          >
            <i className="fa fa-shopping-cart"></i>
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SingleProduct;
