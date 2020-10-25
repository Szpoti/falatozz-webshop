import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Products from "./components/Products";
import Registration from "./components/Registration";
import SingleProduct from "./components/SingleProduct";
import CartService from "./services/CartService";
import ProductService from "./services/ProductService";
import UserService from "./services/UserService";

function App(props) {
  const productService = new ProductService();
  const userService = new UserService();
  const cartService = new CartService();

  return (
    <Router>
      <Route
        exact
        key="main-page"
        path="/"
        render={() => <Redirect to="/login" />}
      />
      <Route
        key="login-screen"
        path="/login"
        render={() => <Login userService={userService} />}
      />
      <Route
        key="registration-screen"
        path="/registration"
        render={() => <Registration userService={userService} />}
      />
      <Route
        key="products-screen"
        path="/products"
        component={() => (
          <Products productService={productService} cartService={cartService} />
        )}
      />
      <Route
        key="singleProduct-screen"
        path="/product/:id"
        component={(props) => (
          <SingleProduct
            productService={productService}
            cartService={cartService}
            match={props.match}
          />
        )}
      />
    </Router>
  );
}

export default App;
