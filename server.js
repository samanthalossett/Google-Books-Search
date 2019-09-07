const express= require("express");

// const path= require("path");
const mongoose= require ("mongoose");

const routes= require ("./routes");

const PORT = process.env.PORT || 3001;
const app= express();

//this defines the middleware
app.use (express.urlencoded ({ extended: true}));
app.use(express.json());

//serve the static assets (usually on heroku)
if (process.env.NODE_ENV=== "production"){
    app.use(express.static("client/build"));
}

//define the API routes here 
app.use(routes);

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",{useNewUrlParser: true});
//end every other request to the React App & define
//these before the API runs

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });
app.listen(PORT, ()=>{
    console.log(`hey sam the API server is now on port ${PORT} !`);
})