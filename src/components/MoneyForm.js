import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'

function MoneyForm() {
       return (
       <Container>
        <Form>
           <h3>Total $ In</h3>
           <Button variant="primary" type="addDollar">Add Dollar</Button>
           <Button variant="primary" type="addQuarter">Add Quarter</Button>
           <Button variant="primary" type="addDime">Add Dime</Button>
           <Button variant="primary" type="addNickel">Add Nickel</Button>
        </Form>
        </Container>
  );
}

export default MoneyForm;
