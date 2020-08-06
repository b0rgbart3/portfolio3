$(document).ready(function() { 
    
    var menuTitle = $("#menuTitle");
    var menu = $("#menu");
 
    // Start out with the menu compressed
    toggleMenu();
    menuTitle.on("click", function(event) { event.stopPropagation(); toggleMenu(); });

    $("body").on("click", closeMenu);

    $("#logoContainer").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
       // window.location.replace("/");
    });
    $("#menu li").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        console.log('menu item chosen: '+ event.target);
        switch(event.target.id) {
            case "homeLink":
                window.location.replace("/");
                break;
            case "bioLink": 
            console.log('ajax call:');

            // Could potentially load my bio from the server side or from db
            $.ajax({
                method: "GET",
                url: "/api/bio"
                }).then( function(bioData) {
                   window.location.replace("/bio");
                }
            );
            break;
            case "projectsLink": 
              window.location.replace("/projects");
            break;
            case "githubLink": 
            closeMenuGracefully( function() {
                window.open("https://github.com/b0rgbart3");
            });
           
            break;
            case "linked-inLink": 
            closeMenuGracefully( function() {
                window.open("https://www.linkedin.com/in/bart-dority/");
            });
           
            break;

            default:break;

        }
    })
});

var toggleMenu=function() {
    // $("#menu li").css({ "transition": "all 2s"})
    console.log("display menu: " + menu);
    // $("#menu").toggleClass("hiddenMenu");
    $("#menu li").toggleClass("hiddenLi");
    // $("#menu li").css({ "transition": "none"})

}

var closeMenu=function() {
    $("#menu li").addClass("hiddenLi");
   
}

var closeMenuGracefully= function(cb) {
    $("#menu li").addClass("hiddenLi");
    cb();
}

var moveToPosition2=function() {
    $("#banner").addClass("banner_pos2");
    $("#logoContainer").addClass("logoContainer_position2");
}

var moveToPosition1=function() {
    $("#banner").removeClass("banner_pos2");
    $("#logoContainer").removeClass("logoContainer_position2");
}