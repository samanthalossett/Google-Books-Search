import React, {Component} from 'react';
// import './App.css';
import Navbar from '../components/Navbar';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
import ResultsCard from '../components/ResultsCard';
import Jumbotron from '../components/Jumbotron';
import Axios from 'axios';

class SavedPage extends Component{
    state={
        books: ""
    }
    componentDidMount(){
        this.getSavedBooks()
    }
    getSavedBooks= ()=>{
        Axios.get('http://localhost:3001/api/books')
        .then(response => {
            var books=response.data
            this.setState({books: books})
        })
    }
    renderSavedBooks= ()=>{
        return this.state.books.map(book => <ResultsCard books={book}/>)
    }
    render(){
    return(
        <section className="SavedPage">

            <Navbar />
            <Jumbotron />
            {this.state.books
            ? this.renderSavedBooks()
            : <div> no saved books yet</div>
            }
           

        </section>
    )
}
}

export default SavedPage;