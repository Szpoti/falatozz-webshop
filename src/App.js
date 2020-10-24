import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Container>
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
      </Router>
    </Container>
  );
}

export default App;
