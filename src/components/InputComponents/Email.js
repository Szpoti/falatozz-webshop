import React, { Fragment } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const Email = (props) => {
  return (
    <Fragment>
      <Form.Label htmlFor="email" srOnly>
        Email
      </Form.Label>
      <InputGroup className="mb-2 mr-sm-2">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <i className="fa fa-user"></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          id="email"
          placeholder="Email"
          onChange={(e) => props.setEmail(e.target.value)}
          required
        />
      </InputGroup>
    </Fragment>
  );
};

export default Email;
