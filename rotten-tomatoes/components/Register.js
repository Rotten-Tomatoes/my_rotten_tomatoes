import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";


export default class Register extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
  };

  handleEmail = (text) => {
    console.log("handleEmail is OK");
    this.setState({ email: text.target.value });
  };

  handlePassword = (text) => {
    console.log("handlePassword is OK");
    this.setState({ password: text.target.value });
  };

  handleFullName = (text) => {
    console.log("handleFullName is OK");
    this.setState({ fullName: text.target.value });
  };

  login = () => {
    const user = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);
    if (this.state.fullName && this.state.email && this.state.password) {
      axios
        .post(`http://localhost:3000/user/`, user)
        .then((response) => {
          let userresponse = response;
          console.log(userresponse.data);
          if (userresponse) {
            sessionStorage.setItem("data", JSON.stringify(userresponse));
            this.setState({ redirectToReferrer: true });
          }
        }, this)
        .catch((error) => alert(error));
    } 
  };

  render() {
    return (
      <Container>
        <form className="container">
          <h3>REGISTER</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter "
              onChange={(text) => {
                this.handleFullName(text);
              }}
            />
          </div>
          <div className="form-group">
            <label>email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(text) => {
                this.handleEmail(text);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(text) => {
                this.handlePassword(text);
              }}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={() => this.login()}
          >
            Submit
          </button>
          {/* <p className="forgot-password text-right">
                Forgot <a to="#">password?</a>
              </p> */}{" "}
        </form>
      </Container>
    );
  }
}
