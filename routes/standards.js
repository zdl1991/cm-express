var express = require('express');
var app = express();
var router = express.Router();
const db = require('../db')

router.get('/', function (req, res, next) {
    console.log(req.query)
    db.query(`SELECT * From standardRecipe WHERE name='${req.query.name}'`, (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
        res.send(rows)
    })


    //res.send('respond with a resource');
   
});

router.post('/addStandardRecipe',(req, res, next) =>{


    console.log(req.body)

    res.send('get')
   // db.query(`INSERT INTO patient(id,name) VALUES(${id},${req.body.name})`, (err, rows, fields) => {
     //   if (err) throw err
       
    //})
  })

module.exports = router;
