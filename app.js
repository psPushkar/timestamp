const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

// the Date functions parses the string and returns a date

// console.log("date:-",new Date().toUTCString());

app.get("/", function(req, res) {
    res.send("Hello pushkar!!");
})

app.get("/api/:date", function(req, res) {
    
    let d = req.params.date;
    console.log("this is The api hit ", d)

    if (req.params.date == "") {
        // return current date and timestamp
        res.send({unix : (new Date().getTime() / 1000), utc : new Date().toUTCString()})
    }
    else if (new Date(d) == "Invalid date") {
        if (new Date(d * 1000) != "Invalid date") {
            let date = new Date(d * 1000).
            res.send({unix : d, utc : new Date(d * 1000).toUTCString()})
        } else {
            res.send({error : "Invalid date"})
        }
    }
})



app.listen("8000", function() {
    
        console.log("Server running at port 8000")
    
})