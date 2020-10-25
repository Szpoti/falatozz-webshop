import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Password from "./InputComponents/Password";
import Email from "./InputComponents/Email";
import ValidationService from "../services/ValidationService";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const cookies = new Cookies();
  const form = React.createRef();
  const validator = new ValidationService();
  const history = useHistory();

  const asError = (message) => {
    setErrorMessages((errorMessages) => [...errorMessages, message]);
  };

  const isFormValid = () => {
    let isValid = true;
    if (!validator.isValidEmail(email)) {
      asError("Kérjük adjon meg egy érvényes email címet!");
      isValid = false;
    }

    if (!validator.isValidPassword(password)) {
      asError(
        "A jelszónak tartalmaznia kell legalább egy számot, egy nagy és egy kisbetűt, és egy speciális karaktert ezek közül: !@#$%&*()-+=^"
      );
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessages([]);
    if (!form.current.reportValidity()) {
      return;
    }

    if (!isFormValid()) {
      return false;
    }
    cookies.set("user", email);
    history.push("/products");
  };

  return (
    <Container className="content-container">
      <p className="h2">Bejelentkezés</p>

      {errorMessages.map((message, index) => (
        <Alert
          key={`loginError-${index}`}
          variant="danger"
          className="text-center text-lg-left"
        >
          {message}
        </Alert>
      ))}

      <Form ref={form}>
        <Email setEmail={setEmail} />
        <Password setPassword={setPassword} />
        <Button
          variant="primary"
          type="submit"
          className="mb-2 mr-sm-2"
          onClick={handleSubmit}
        >
          Bejelentkezés
        </Button>
        <Button
          className="mb-2 mr-sm-2"
          onClick={() => history.push("/products")}
        >
          Tovább
        </Button>
      </Form>
      <p>
        Még nem regisztráltál? Tedd meg <Link to="/registration">itt!</Link>
      </p>
    </Container>
  );
};

export default Login;
