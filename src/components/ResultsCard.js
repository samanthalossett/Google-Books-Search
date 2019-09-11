import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ResultsCard(){
    return(

<Card fluid>
  <Card.Img variant="left" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Book Title</Card.Title>
    <Card.Text>
      A Description of the book.
    </Card.Text>
    <Button variant="primary">View</Button>
    <Button variant="danger" href="/saved">Save</Button>
  </Card.Body>
</Card>
    )
}

export default ResultsCard;