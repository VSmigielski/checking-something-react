

import './App.css';
import MoneyForm from './components/MoneyForm'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-center">Vending Machine</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={8}>
          <MoneyForm />
      </Col>
      </Row>
    </Container>
  );
}
export default App;