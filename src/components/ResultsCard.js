import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ResultsCard extends Component{
  
  render(){
    return (
      
      <Card fluid>
  <Card.Img variant="left" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.books.title}</Card.Title>
    <Card.Text>
     desc here
    </Card.Text>
    <Button variant="primary">View</Button>
    <Button variant="danger" href="/saved">Save</Button>
  </Card.Body>
</Card>
    )
  }
}


export default ResultsCard;