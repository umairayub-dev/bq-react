import { Container } from 'react-bootstrap'
import './App.css'
import MyNavbar from './components/Navbar/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Container>
      <MyNavbar/>
      <Signup/>
    </Container>
  )
}

export default App
