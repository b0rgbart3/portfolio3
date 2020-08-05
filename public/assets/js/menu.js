$(document).ready(function() { 
    
    var menuTitle = $("#menuTitle");
    var menu = $("#menu");
 
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
            $.ajax({
                method: "GET",
                url: "/api/bio"
                }).then( function(bioData) {
                    // console.log("Data returned: " + JSON.stringify(bioData));
                    // closeMenu();
                    // moveToPosition2();
                    // $("#bio").text(bioData.bio );

                   window.location.replace("/bio");
                }
            );
            break;
            case "projectsLink": 
            break;
            case "resumeLink": 
            break;
            case "githubLink": 
            break;
            case "linked-inLink": 
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

var moveToPosition2=function() {
    $("#banner").addClass("banner_pos2");
    $("#logoContainer").addClass("logoContainer_position2");
}

var moveToPosition1=function() {
    $("#banner").removeClass("banner_pos2");
    $("#logoContainer").removeClass("logoContainer_position2");
}