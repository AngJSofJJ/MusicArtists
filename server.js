var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('musicartists', ['musicartists']);
var bodyParser = require('body-parser');

// To check if our express and node server is up and running in our browser.
/*app.get('/', function(req, res){
   res.send('Hello World from Server.js');
});
*/
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/artisansList', function(req,res){
   console.log('I received a GET request');

   db.musicartists.find(function(err, docs){
     console.log(docs);
     res.json(docs);
   });
});

app.post('/artisansList', function(req,res){
    console.log(req.body);
    db.musicartists.insert(req.body, function(err, doc){
       res.json(doc);
    });
});

app.delete('/artisansList/:id', function(req, res){
    var id = req.params.id;
    db.musicartists.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
       res.json(doc);
    });
});

app.get('/artisansList/:id', function(req, res){
    var id = req.params.id;
    db.musicartists.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
       res.json(doc);
    });
});

app.put('/artisansList/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    console.log(req.body.artist);

    db.musicartists.findAndModify(
        {
            query:{_id: mongojs.ObjectId(id)},
            update: {$set: {
                    artist: req.body.artist,
                    country:req.body.country,
                    period:req.body.period,
                    genre:req.body.genre,
                    claimedsales:req.body.claimedsales
            }},
            new:true
        }, function(err, doc){
       res.json(doc);
    });
});

app.listen(3000);
console.log('server running on port 3000 oho god');