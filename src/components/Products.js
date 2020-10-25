import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const productService = props.productService;
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [priceSUM, setPriceSUM] = useState(0);

  const addProduct = (product, price, id) => {
    let prods = productsInCart;
    let productIsInCart = false;

    prods.map((prod) => {
      console.log("prod", prod);
      if (prod.name === product) {
        prod.quantity += 1;
        productIsInCart = true;
      }
    });

    if (!productIsInCart) {
      prods.push({ name: product, quantity: 1, id: id });
    }

    setPriceSUM(priceSUM + parseInt(price));
    setProductsInCart([...prods]);
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
