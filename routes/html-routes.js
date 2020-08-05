var express = require("express");

// var db = require("../models");

var path = require("path");
var fs = require('fs');

var projects = [

    {
        title: "Space Force",
        description: "",
        github: "", 
        image:"assets/images/work/space.jpg",
        github:"https://b0rgbart3.github.io/project-one/",
        live:"https://github.com/b0rgbart3/project-one"
    },
    {
        title: "The Weather App",
        description: "",
        github: "", 
        image:"assets/images/work/weather.jpg",
        live:"https://b0rgbart3.github.io/weather-dashboard/",
        github:"https://github.com/b0rgbart3/weather-dashboard"
    },
    {
        title: "Quizzler",
        description: "",
        github: "", 
        image:"assets/images/work/quiz.jpg",
        live:"https://b0rgbart3.github.io/code-quiz2/",
        github:"https://github.com/b0rgbart3/code-quiz2"
    },
    {
        title: "Middle | Ground",
        description: "",
        github: "", 
        live:"",
        image:"assets/images/work/middle.jpg",
        github:"https://b0rgbart3.github.io/project-one/",
        live:"https://github.com/b0rgbart3/project-one"
    }

];

 var htmlRouter= function(app) {
    app.get("/projects", function(req, res) {
        var hbsObject = {
            projects: projects
        }
        res.render("projects", hbsObject);
    });
   
    app.get("/bio", function(req, res) {
        res.render("bio");
    });    
    app.get("/", function(req, res) {
        res.render("index");
    });
}

module.exports = htmlRouter;