var express = require("express");

// var db = require("../models");

var path = require("path");
var fs = require('fs');


 var htmlRouter= function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });
}

module.exports = htmlRouter;