import React from 'react';
// import './App.css';
import Navbar from '../components/Navbar';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
import ResultsCard from '../components/ResultsCard';
import Jumbotron from '../components/Jumbotron';


function SavedPage(){
    return(
        <section className="SavedPage">

            <Navbar />
            <Jumbotron />
            <ResultsCard />

        </section>
    )
}

export default SavedPage;