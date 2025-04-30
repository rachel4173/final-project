import {getPageStuff} from "./model.js";


function initApp() {
    getPageStuff("home");

    $("nav a").on("click", (e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;

        if(btnID == "home") {
        $("nav a").removeClass("links-black");
        $(".logo img").attr("src", "images/logo-white.png");
        $("nav").removeClass("nav-static");
        } else {
        $("nav a").addClass("links-black");
        $(".logo img").attr("src", "images/logo-black.png");
        $("nav").addClass("nav-static");
      };

      getPageStuff(btnID);

        if(btnID == "help") {
            helpMe();
        } else {
            getPageStuff(btnID);
        };
    });
}

$(document).ready(() => {
    initApp();
});