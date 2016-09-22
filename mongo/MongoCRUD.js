let mongodb = require( 'mongodb' );


function MongoCRUD( collection ) {
    "use strict";
    let self = this;

    //TODO Getters and Setters
    self.collection = collection;

    (function () {
        mongodb.MongoClient.connect(
            "mongodb://127.0.0.1:27017/admin" , function ( err , database ) {
                if ( err ) {
                    console.log( err );
                    process.exit( 1 );
                }
                else {
                    console.log( "I\'m up!" );
                    self.db = database;
                }
            } );
    })();
}

MongoCRUD.prototype.getAll = function ( callback ) {
    let self = this;

    self.db.collection( self.collection )
        .find( {} )
        .toArray()
        .then( callback );

};

MongoCRUD.prototype.insertOne = function ( doc , callback ) {

    this.db.collection( this.collection )
        .insertOne( doc , function ( err ) {

            if ( err ) {
                //TODO error handle
                console.log( res , err.message , "Failed to create new contact." );
            } else {
                callback();
            }
        } )
};

MongoCRUD.prototype.findOne = function ( query , callback ) {

    this.db.collection( this.collection )
        .findOne( query , function ( err , doc ) {

            if ( err ) {
                //TODO error handle
                console.log( res , err.message , "Failed to create new contact." )
            } else {
                //res.status(200)
                callback();
            }
        } )
};

MongoCRUD.prototype.updateOne = function ( updateDoc , callback ) {

    this.db.collection( this.collection )
        .updateOne( updateDoc , function ( err ) {

            if ( err ) {
                //TODO error handle
                console.log( res , err.message , "Failed to update contact." )
            } else {
                //res.status(204)
                callback();
            }
        } )
};

MongoCRUD.prototype.deleteOne = function ( query , callback ) {

    this.db.collection( this.collection )
        .deleteOne( query , function ( err ) {

            if ( err ) {
                //TODO error handle
                console.log( err.message , "Failed to delete new contact." )
            } else {
                //res.status(204)
                callback();
            }
        } )
};

module.exports = MongoCRUD;
























