"use strict";
let express = require( 'express' );
let router = express.Router();

let MongoCRUD = require( "./../mongo/MongoCRUD" );
let app = require( "./../app" );
let CRUD = new MongoCRUD( "contacts" );


/* GET home page. */

router.route( "/" )
      //TODO main Middleware
      .all()
      .get( function ( req , res ) {
          CRUD.getAll( function ( result ) {

              res.render( 'index' , {
            
                  title : "Index" ,
                  docs : result
              } )
          } )
      } );

module.exports = router;
