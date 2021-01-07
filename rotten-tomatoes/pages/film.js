import MyNavbar from '../components/MyNavbar'
import Container from 'react-bootstrap/Container'
import Cookies from 'js-cookie';

function Film() {
  const jwt = "dummy";
  Cookies.set('jwt', jwt);
  return <>
    <MyNavbar></MyNavbar>
      <Container>
      <h1>LISTE DES FILMS</h1>
    </Container >
  </>;
};

export default Film; 