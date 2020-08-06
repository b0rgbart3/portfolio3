var express = require("express");

// var db = require("../models");

var path = require("path");
var fs = require('fs');

var projects = [

    {
        title: "Space Force",
        description: "This app uses the NASA image bank API, and cross references these images with articles from Wikipedia. Users can search through photographs and find out more about these scientific topics in a visual manner.",
        image:"assets/images/work/space.jpg",
        github:"https://b0rgbart3.github.io/project-one/",
        live:"https://github.com/b0rgbart3/project-one"
    },
    {
        title: "The Weather App",
        description: "This app pulls live weather and forecast data from Open-Weather-Map.org's API.  It allows users to view the weather and get a 5 day forecast in multiple cities, to help them better plan their trips.",
        image:"assets/images/work/weather.jpg",
        github:"https://b0rgbart3.github.io/weather-dashboard/",
        live:"https://github.com/b0rgbart3/weather-dashboard"
    },
    {
        title: "Quizzler",
        description: "This app sets up a simple set of quiz questions and allows users to store their high scores to compare and compete against their peers.",
        image:"assets/images/work/quiz.jpg",
        github:"https://b0rgbart3.github.io/code-quiz2/",
        live:"https://github.com/b0rgbart3/code-quiz2"
    },
    {
        title: "Middle | Ground",
        description: "This app allows users to enter a subject, and then aggregates articles from a spectrum of news sources that appear on social media related to that topic.  It also queries the GoogleFact Check API, displaying the truth rating for each article, and generates a word cloud to show what are the hot topics of each side of the political spectrum, and displays them side by side.",
        github: "", 
        live:"",
        image:"assets/images/work/middle.jpg",
        github:"https://b0rgbart3.github.io/project-one/",
        live:"https://rocky-meadow-78317.herokuapp.com/"
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