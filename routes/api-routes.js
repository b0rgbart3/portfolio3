var express = require("express");

// var db = require("../models");

var path = require("path");
var fs = require('fs');


 var apiRouter= function(app) {
    app.get("/api/bio", function(req, res) {
        var bioData = {
            bio: `Full Stack Web Developer with a deep knowledge of a broad range of web technologies and a strong background in design and computer science who cares deeply about user-centric product development.

            Proficient in JavaScript, CSS, HTML, PHP, MySQL, Sass, git, JQuery and Unix. Experienced in developing with Angular, Node.js, MongoDB, Ruby on Rails, Objective-C and using cloud based computing platforms like AWS, and CSS Frameworks like Bootstrap and Materialize. I’m working on a certification of Full Stack Development from UC Berkeley extension. I have a certificate of iPhone programming from The City College of San Francisco, and a BA in Computer Graphics from The Pratt Institute School of Art and Design, in New York.
            
            I have extensive experience in advertising, animation, marketing and design. I’m looking to join a team of engineers that enjoy collaborating and value life-long learning.`
        }
        res.json(bioData);
    });
}

module.exports = apiRouter;