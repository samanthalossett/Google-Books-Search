import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Search(){
    return(

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Search for a book </Form.Label>
    <Form.Control type="search" placeholder="start typing" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default Search;