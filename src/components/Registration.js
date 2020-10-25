import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Alert, Container, Button, Form } from "react-bootstrap";
import Password from "./InputComponents/Password";
import ValidationService from "../services/ValidationService";
import Email from "./InputComponents/Email";
import Username from "./InputComponents/Username";
import Address from "./InputComponents/Address";

const Registration = (props) => {
  const userService = props.userService;
  const validator = new ValidationService();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
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

    const fullAddress = zip + " " + address;

    if (userService.registerUser(username, email, password, fullAddress)) {
      history.push("/products");
    } else {
      asError("Ez az email cím már foglalt!");
    }
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
        <Username setUsername={setUsername} />

        <Email setEmail={setEmail} />

        <Password setPassword={setPassword} />

        <Address setAddress={setAddress} setZip={setZip} />

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
