"use strict";
var express = require( 'express' );
var router = express.Router();

const MongoCRUD = require( "./../mongo/MongoCRUD" );
var app = require( "./../app" );
var CRUD = new MongoCRUD( "contacts" );


/* GET home page. */

//TODO Refactor to router.route()
router.get( '/' , function ( req , res ) {

    CRUD.getAll( function ( result ) {

        /*res.json(result);*/

        res.render( 'index' , {

            title : "Index" ,
            docs : result
        } )

    } )
} );


module.exports = router;
