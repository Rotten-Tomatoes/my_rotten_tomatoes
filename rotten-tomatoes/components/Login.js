import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Router from "next/router";
import axios from "axios";
import Cookies from "js-cookie";


class Login extends Component {
  
  state = {
    email: "",
    password: "",
  };

  handleEmail = (text) => {
    console.log("email ok");
    this.setState({ email: text.target.value });
  };

  handlePassword = (text) => {
    console.log("password ok");
    this.setState({ password: text.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email && this.state.password) {
      axios
        .post("http://localhost:3000/user/login", user)
        .then((response) => {
          Cookies.set("access_token", response.data.accessToken);
        })
        .catch((error) => alert(error));
    }
    if (user) {
      Router.push("/");
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(text) => {
                this.handleEmail(text);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(text) => {
                this.handlePassword(text);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep logged in" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
