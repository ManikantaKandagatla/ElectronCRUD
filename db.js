var express = require('express');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

var data = [{
    firstName: 'kmk',
    lastName : 'k',
    email:'mk@'
} , {
    firstName: 'manikanta',
    lastName : 'k',
    email:'mk@12'
}, {
    firstName: 'rahul dravid',
    lastName : 'k',
   email:'mk@12345'
}, {
    firstName: 'teradata',
    lastName : 'k',
    email:'mk@1234'
}];

MongoClient.connect("mongodb://localhost:27017/mkdb", function(err, database) {
  if(!err) {
    console.log("We are connected");
    db = database;
    
    //console.log(database);
    app.listen(3000);
  }
  else{
    console.log("errr");
  }
});


app.get("/getDetails", function(req, res) {
    console.log('Get route');
    /*for (var i = 0; i < data.length; i++) {
        db.collection('details').insertOne(data[i], function(err, result) {
            console.log("Inserted a detail into the details collection.");
        });
    }*/
    var rows = [];
    db.collection('details').find().toArray(function(err, results) {
        //console.log(results)
        rows = results;
        //console.log(rows);
        res.send(rows);
  // send HTML file populated with quotes here
    });
    
});

app.post("/addDetails",function(req,res){
    //var User = mongoose.model('mktable', userSchema);
    console.log(req.body);
    db.collection('details').insertOne(req.body, function(err, result) {
            console.log("Inserted a detail into the details collection.");
            res.send({"command":"success"});
    });
});