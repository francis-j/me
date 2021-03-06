const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const db_auth = process.env.DB_USR + ":" + process.env.DB_PWD;
const db_uri = "mongodb://" + (db_auth === ":" ? process.env.DB_URI : db_auth + "@" + process.env.DB_URI);

// Connect
const connection = (closure) => {
    return MongoClient.connect(db_uri, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// CORS
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", ["Accept", "Content-Type"]);
    next();
});

router.get("/mongodb/cstring", (req, res) => {
    res.json(db_uri);
});

// Get sections
router.get('/section', (req, res) => {
    connection((db) => {
        db.collection('me')
            .find()
            .toArray()
            .then((sections) => {
                response.data = sections;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;