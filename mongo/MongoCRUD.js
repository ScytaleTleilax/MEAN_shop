"use strict";
var mongodb = require('mongodb');

var DB;
mongodb.MongoClient.connect(
    "mongodb://127.0.0.1:27017", function (err, database) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        DB = database;
        console.log("I\'m up!");
    });

function MongoCRUD(collection) {

    //TODO Getters and Setters

    this.collection = collection;
    this.db = DB;
}

MongoCRUD.prototype.getAll = function (callback) {
    this.db.collection(this.collection)
        .find({})
        .toArray()
        .then(callback);
};

MongoCRUD.prototype.insertOne = function (doc, callback) {
    this.db.collection(this.collection)
        .insertOne(doc, function (err, doc) {

            if (err) {
                //TODO error handle
                console.log(res, err.message, "Failed to create new contact.");
            } else {
                callback;

            }
        })

};

MongoCRUD.prototype.findOne = function (query) {
    this.db.collection(this.collection)
        .findOne(query, function (err, doc) {

            if (err) {
                //TODO error handle
                console.log(res, err.message, "Failed to create new contact.")
            } else {
                //res.status(200)
                return JSON.parse(doc.ops[0]);
            }
        })
};

MongoCRUD.prototype.updateOne = function (req, res, updateDoc) {
    this.db.collection(this.collection)
        .updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function (err, doc) {

            if (err) {
                //TODO error handle
                console.log(res, err.message, "Failed to update contact.")
            } else {
                //res.status(204)
                return true;
            }
        })
};

MongoCRUD.prototype.deleteOne = function (query) {
    this.db.collection(this.collection)
        .deleteOne(query, function (err) {

            if (err) {
                //TODO error handle
                console.log(err.message, "Failed to delete new contact.")
            } else {
                //res.status(204)
                return true;
            }
        })
};

module.exports = MongoCRUD;
























