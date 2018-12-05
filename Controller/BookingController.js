const express = require('express')
const api = express.Router()
const Model = require('../models/bookings')
const mongoose = require('mongoose')
const db = mongoose.connection;

api.post('/booking1',  function (req, res) {

    var name = req.body.firstname;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var total = req.body.total;
    var date = req.body.date;
    var movie = req.body.movie;
    var timing = req.body.timing;
    var reference = req.body.reference;

    var newMovie = new Model({

        name: name,
        quantity: quantity,
        price: price,
        total: total,
        date: date,
        movie: movie,
        timing: timing,
        reference: reference
        
    });
    
        Model.create(newMovie, function (err, Movie) {
            if (err) throw err;
        });
        return res.render('payment.ejs',{name: req.body.firstname,})
});

module.exports = api;