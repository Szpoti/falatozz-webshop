import React, { Fragment } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const Address = (props) => {
  return (
    <Fragment>
      <Form.Label htmlFor="address" srOnly>
        Address
      </Form.Label>
      <InputGroup className="mb-2 mr-sm-2">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <i className="fa fa-home"></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          id="zip"
          placeholder="Zip"
          minLength="4"
          maxLength="4"
          onChange={(e) => props.setZip(e.target.value)}
          required
        />
        <FormControl
          className="w-75"
          id="address"
          placeholder="Address"
          onChange={(e) => props.setAddress(e.target.value)}
          required
        />
      </InputGroup>
    </Fragment>
  );
};

export default Address;
