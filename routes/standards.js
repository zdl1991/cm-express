var express = require('express');
var router = express.Router();

const db = require('../db')

router.get('/', function (req, res, next) {

    db.query('SELECT * From patient', (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
        res.send(rows)
    })


    //res.send('respond with a resource');
   
});

module.exports = router;
