var express = require('express');
var router = express.Router();

const MongoCRUD = require("./../mongo/MongoCRUD");
var app = require("./../app");

/* GET home page. */


router.get('/', function (req, res) {

    var CRUD = new MongoCRUD("contacts");

    CRUD.getAll(function (result) {
        res.json(result);
    });

    /*
     res.render('index', {
     title: 'Express'
     });*/
});

module.exports = router;
