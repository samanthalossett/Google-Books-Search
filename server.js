//**set up express */
const express= require("express");
const app= express();


const path= require("path");
const mongoose= require ("mongoose");
// const routes= require ("./routes");
const PORT = process.env.PORT || 3001;


//this defines the middleware
app.use (express.urlencoded ({ extended: true}));
app.use(express.json());

//serve the static assets (usually on heroku)
if (process.env.NODE_ENV=== "production"){
    app.use(express.static("client/build"));
}

//define the API routes here 
// app.use(routes);

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",{useNewUrlParser: true});
//end every other request to the React App & define
//these before the API runs

app.get('/', (req, res)=>{
    res.send('hey sam this is express working, just not rendering your app, figure this out');
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.listen(PORT, ()=>{
    console.log(`hey sam this is Express listening on port ${PORT} !`);
})
