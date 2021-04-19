$(function() {
    $(".video-button").click(function() {
        let about = $(".modal");

        if (about.css("display") === "none") {
            about.css("display", "block");

        } else {
            about.css("display", "none");
        }
    });
    $('.modal-close').click(function() {
        $('.modal').css("display", "none");
    })

});

let Button = document.getElementById('welcome-button');
Button.addEventListener("click", x);

function x() {
    Button.style.backgroundColor = "green";
}

let Buttona = document.getElementById('about-button');
Buttona.addEventListener("click", y);

function y() {
    Buttona.style.backgroundColor = "green";
}