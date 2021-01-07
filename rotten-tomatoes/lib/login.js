import Cookies from "js-cookie";
import axios from "axios";

export function login(email, password) {
  const user = {
    email,
    password,
  };
  if (email && password) {
    axios
      .post("http://localhost:3000/user/login", user)
      .then((response) => {
        Cookies.set("access_token", response.data.accessToken);
      })
      .catch((error) => alert(error));
    Router.push("/");
  } 
}
