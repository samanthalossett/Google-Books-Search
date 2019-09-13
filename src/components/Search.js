import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Search(){
    return(
<div className="searchDiv" style={{maxWidth:'50%', marginBottom: '20px'}}>
<Form >
  <Form.Group controlId="formSearchBooks">
    <Form.Label >Search for a book </Form.Label>
    <Form.Control className="searchInputdiv" type="search" placeholder="start typing" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    )
}

export default Search;