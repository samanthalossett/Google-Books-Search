//**set up express */
const express= require("express");
const app= express();
const path= require("path");
const mongoose= require ("mongoose");
const cors= require ("cors");
//*****************NOT WORKING ********************* */
// const routes= require ("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;


//this defines the middleware
app.use (express.urlencoded ({ extended: true}));
app.use(express.json());
app.use(cors());

//serve the static assets (usually on heroku)
if (process.env.NODE_ENV=== "production"){
    app.use(express.static(path.join(__dirname,"./build"))) 
}

//**********NOT WORKING ************** */define the API routes here 
// app.use(routes);

////////////////////////////////////////////////////////////////////////////
//connect to mongoose now.... 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",{useNewUrlParser: true});
//end every other request to the React App & define
//these before the API runs
mongoose.connect('mongodb://localhost/googlebooks', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: SAM FREAK OUT NOW'));
db.once('open', function() {
    console.log("YOU'RE CONNECTED TO MONGO/OOSE SAM! whoop!");
});
const Book= require ('./models/Book');

app.get('/', (req, res)=>{
    res.send('hey sam this is express working, just not rendering your app, figure this out');
    // res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/books", (req, res)=>{
    Book.find(
        {},
        function (err, bookresults){
                if(err){
                    console.log("error w/ bookresults");
                }
                res.json(bookresults);
        }
    )
});

app.listen(PORT, ()=>{
    console.log(`hey sam this is Express listening on port ${PORT} !`);
})


