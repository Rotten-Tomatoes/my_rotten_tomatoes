import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import UserContext from "../lib/userContext";
import Router from "next/router";
import { useContext } from 'react';
import Cookies from "js-cookie";

function MyNavbar() {

  const [, setUserContext] = useContext(UserContext);

  function onLogout() {
    Cookies.set("access_token", '');
    setUserContext(undefined)
    Router.push("/login");
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/film">Film</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      <UserContext.Consumer>
        {([userContext]) => {
          if (userContext) {
            return (
              <Nav>
                <Navbar.Text>Signed in as: {userContext.username}</Navbar.Text>
                <Nav.Link onClick={onLogout}>Logout</Nav.Link>
              </Nav>
            );
          }

          return (
            <Nav>
              <Link href="/login" passHref>
                <Nav.Link>Login</Nav.Link>
              </Link>
            </Nav>
          );
        }}
      </UserContext.Consumer>
    </Navbar>
  );
}

export default MyNavbar;
