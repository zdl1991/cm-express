var express = require('express');
var router = express.Router();

const db = require('../db')
const uuidv1 = require('uuid/v1')

router.get('/', function (req, res, next) {
    console.log(req.query)
    db.query(`SELECT * From standardRecipe WHERE name='${req.query.name}'`, (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
        res.send(rows)
    })


    //res.send('respond with a resource');
   
});
router.post('/', function (req, res, next) {
    // res.json(req.body)
    db.query(`INSERT INTO patient(id,name) VALUES(${uuidv1().replace(/-/g, '')},${req.body.name})`, (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
        res.send(rows)
    })
  })

module.exports = router;
