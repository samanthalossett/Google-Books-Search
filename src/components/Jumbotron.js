import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function JumbotronHeader(){
  return(
 <Jumbotron fluid style={{textAlign: 'center'}}>
  <Container>
    <h1>Google Book Search</h1>
    <p>
      Search & Save Your Favorite Books Here!
    </p>
  </Container>
</Jumbotron>
  )
}
export default JumbotronHeader;
    