"use strict";
var mongodb = require( 'mongodb' );
var DB = undefined;

mongodb.MongoClient.connect(
    //TODO switch of ENV for the ,omgo String URI
    "mongodb://127.0.0.1:27017" , function ( err , database ) {
        if ( err ) {
            console.log( err );
            process.exit( 1 );
        }
        DB = database;
        console.log( "I\'m up!" );
    } );

function   MongoCRUD( collection ) {

    //TODO Getters and Setters
    this.collection = collection;
    this.db = DB;
}


MongoCRUD.prototype.getAll = function ( callback ) {
    var self = this;

    self.db.collection( self.collection )
        .find( {} )
        .toArray()
        .then( callback , function () {
            self.db.close();
        } );
};

MongoCRUD.prototype.insertOne = function ( doc , callback ) {
    var self = this;

    self.db.collection( self.collection )
        .insertOne( doc , function ( err , doc ) {
            if ( err ) {
                //TODO error handle
                console.log( res , err.message , "Failed to create new contact." );
            } else {
                callback;
            }
        } )
        .then( function () {
            self.db.close();
        } )
};

MongoCRUD.prototype.findOne = function ( query , callback ) {
    var self = this;

    self.db.collection( self.collection )
        .findOne( query , function ( err ) {
            if ( err ) {
                //TODO error handle
                console.log( res , err.message , "Failed to create new contact." )
            } else {
                //res.status(200)
                callback;
            }
        } )
        .then( function () {
            self.db.close();
        } )
};

MongoCRUD.prototype.updateOne = function ( updateDoc , callback ) {
    var self = this;

    self.db.collection( self.collection )
        .updateOne( updateDoc , function ( err ) {
            if ( err ) {
                //TODO error handle
                console.log( res , err.message , "Failed to update contact." )
            } else {
                //res.status(204)
                callback;
            }
        } )
        .then( function () {
            self.db.close();
        } )
};

MongoCRUD.prototype.deleteOne = function ( query , callback ) {
    var self = this;

    self.db.collection( self.collection )
        .deleteOne( query , function ( err ) {
            if ( err ) {
                //TODO error handle
                console.log( err.message , "Failed to delete new contact." )
            } else {
                //res.status(204)
                callback;
            }
        } )
        .then( function () {
            self.db.close();
        } )
};
    
module.exports = MongoCRUD;