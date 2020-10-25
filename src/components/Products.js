import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const productService = props.productService;
  const cartService = props.cartService;
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState(
    cartService.getCart().prods
  );
  const [priceSUM, setPriceSUM] = useState(cartService.getCart().sum);

  const addProduct = (product, price, id) => {
    const cart = cartService.addProduct(product, price, id);

    setPriceSUM(cart.sum);
    setProductsInCart([...cart.prods]);
  };

  useEffect(() => {
    const getData = () => {
      setProducts(productService.getAllProducts());
    };
    getData();
  }, [productService]);

  return (
    <Row className="container-fluid">
      <Col sm={9} className="">
        <Container className="content-container">
          <Row>
            <Col xs={12} className="h2 text-center">
              Termékek
            </Col>

            {products.map((product) => {
              return (
                <ProductCard
                  key={`prod-${product.id}`}
                  product={product}
                  addProduct={addProduct}
                ></ProductCard>
              );
            })}
          </Row>
        </Container>
      </Col>
      <Col sm={3} className="px-0">
        <Container className="content-container cart">
          <Col xs={12} className="h2 text-center">
            Kosár
          </Col>
          {productsInCart.map((product) => {
            return (
              <p className="h6" key={`${product.id}-incart`}>
                {product.quantity} db {product.name}
              </p>
            );
          })}
          <p>{priceSUM} $</p>
        </Container>
      </Col>
    </Row>
  );
};

export default Products;
