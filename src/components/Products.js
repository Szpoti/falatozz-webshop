import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductService from "../services/ProductService";
import ProductCard from "./ProductCard";

const Products = () => {
  const productService = new ProductService();
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

  const addProduct = (product) => {
    console.log("productsInCart", productsInCart);
    let prods = productsInCart;
    console.log("prods", prods);
    let productIsInCart = false;
    prods.map((prod) => {
      console.log("prod", prod);
      if (prod.name === product) {
        prod.quantity += 1;
        productIsInCart = true;
      }
    });
    if (!productIsInCart) {
      console.log("New product pushed");
      prods.push({ name: product, quantity: 1 });
    }
    console.log("productsInCart", productsInCart);
    console.log("prods", prods);
    console.log("seting cart");
    setProductsInCart([...prods]);
  };

  useEffect(() => {
    console.log("productsInCart", productsInCart);
  }, [productsInCart]);

  useEffect(() => {
    setProducts(productService.getAllProducts());
  }, []);

  return (
    <Row className="container-fluid">
      <Col sm={9} className="mx-0 px-0">
        <Container className="content-container mx-0">
          <Col xs={12} className="h2 text-center">
            Termékek
          </Col>
          {products.map((product) => {
            return (
              <ProductCard
                product={product}
                addProduct={addProduct}
              ></ProductCard>
            );
          })}
        </Container>
      </Col>
      <Col sm={3} className="px-0">
        <Container className="content-container cart">
          <Col xs={12} className="h2 text-center">
            Kosár
          </Col>
          {productsInCart.map((product) => {
            return (
              <p className="h6">
                {product.quantity} db {product.name}
              </p>
            );
          })}
        </Container>
      </Col>
    </Row>
  );
};

export default Products;
