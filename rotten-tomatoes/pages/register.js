import Register from "../components/Register"
import MyNavbar from '../components/MyNavbar'
import Container from 'react-bootstrap/Container' 


function RegisterPage() {
  return <>
  <MyNavbar></MyNavbar>
  <Container>
  <Register/>
  </Container>
  </>
}


export default RegisterPage