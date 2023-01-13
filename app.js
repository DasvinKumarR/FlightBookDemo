const express = require("express");
const bodyparser = require("body-parser");
const app = express();
let value;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is up at 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/home.html");
});

app.post("/", function(req, res){
    let Uname = String(req.body.Uname).length;
    let Email = String(req.body.email).length;
    if(Uname > 0 && Email > 0) {
        
        res.sendFile(__dirname + "/selectFlight.html");
    }
    else {
        res.send("<h1>Oops!, No fileds should be empty</h1>");
    }
});

app.post("/Flights", function(req, res){
    let from = String(req.body.Departure);
    let to = String(req.body.Destination);
    if(from !== "Departure" && to !== "Destination") {
        res.sendFile(__dirname + "/Flights.html");
    }
    else {
        res.send("<h1>Oops!, Please select valid details</h1>");
    }
});

app.post("/Payment", function(req, res){
    res.sendFile(__dirname + "/Payment.html");
});

app.post("/Purchase", function(req, res){
    let Fname = String(req.body.Fname);
    let Lname = String(req.body.Lname);
    let Seats = (req.body.Seats);
    let cardNo = Number(req.body.cardNo);
    console.log(req.body);
    if (Fname !== "" && Lname !== "" ) {
        if(Seats > 0 && cardNo > 0) {
            res.sendFile(__dirname + "/Success.html");
        }
        else {
            res.sendFile(__dirname + "/Failure.html");
        }
    }
    else {
        res.sendFile(__dirname + "/Failure.html");
    }
});
