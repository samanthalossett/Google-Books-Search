import axios from 'axios';

module.exports= function (app){
    //load the main page?
    app.get ("./public/index.html", function (req, res){
        res.send("hey sam its working just not rendering the page still")
        console.log(req,res);
    });
};

const request = require ("request");
const apiKey= "AIzaSyA-VN3KnEzMAbvfYhDNV7rwCJwo4YuMkFE";
const googleAPI= "https://www.googleapis.com/books/v1/volumes?q=";


//////////////////////////////////////////////////////now start axios sam//
// const axios = require ('axios');

//make a request 
axios.get('/api/books').then (function(res){
    //handle success
    console.log("this is the axios response json object" + res);
})
.catch (function (error){
    //handle error
    console.log(error);
})
.finally (function(){
    //handle the execution
})

//make a post
axios.post('/api/books', {
    title: "",
    authors: ""
})
.then (function (res){
    console.log(res);
})
.catch(function (error){
    console.log(error);
});

//OR is it like this for an API? : 
axios({
    method: 'post',
    url: '/',
    data: {
        title:"",
        authors:"",
    }
})

