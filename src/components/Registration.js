import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Alert, Container, Button, Form } from "react-bootstrap";
import Password from "./InputComponents/Password";
import ValidationService from "../services/ValidationService";
import Email from "./InputComponents/Email";

const Registration = (props) => {
  const validator = new ValidationService();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const form = React.createRef();

  const asError = (message) => {
    setErrorMessages((errorMessages) => [...errorMessages, message]);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.current.reportValidity()) {
      return;
    }

    setErrorMessages([]);
    if (!isFormValid()) {
      return;
    }

    history.push("/products");
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

  return (
    <Container className="content-container">
      <p className="h2">Regisztráció</p>

      {errorMessages.map((message, index) => (
        <Alert
          key={`registrationError-${index}`}
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
          onClick={handleRegister}
        >
          Regisztráció
        </Button>
      </Form>
      <p>
        Már van fiókod? Jelentkezz be <Link to="/login">itt!</Link>
      </p>
    </Container>
  );
};

export default Registration;
