import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Products from "./components/Products";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Route
        exact
        key="main-page"
        path="/"
        render={() => <Redirect to="/login" />}
      />
      <Route key="login-screen" path="/login" render={() => <Login />} />
      <Route
        key="registration-screen"
        path="/registration"
        render={() => <Registration />}
      />
      <Route
        key="products-screen"
        path="/products"
        component={() => <Products />}
      />
    </Router>
  );
}

export default App;
