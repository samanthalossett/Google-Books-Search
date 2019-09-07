module.exports= function (app){


    //load the main page?
    app.get ("/server.js", function (req, res){
        console.log(req,res);
    });
};

const request= require ("request");

const apiKey = `AIzaSyA-VN3KnEzMAbvfYhDNV7rwCJwo4YuMkFE
