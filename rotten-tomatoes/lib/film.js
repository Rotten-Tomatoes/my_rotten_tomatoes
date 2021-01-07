import Cookies from 'js-cookie';

export async function film({ email, password }) {

  const jwt = "dummy";
  Cookies.set('jwt', jwt);
  return {
    userid: 1,
    username: email
  };
};