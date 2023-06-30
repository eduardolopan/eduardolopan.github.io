/*global $, document, window, console*/

$(document).ready(function () {
    "use strict";

    $(".fa-bars").click(function () {
        if ($(".opcion").css("display") === "none") {
            $(".opcion").slideDown("slow");
        } else {
            $(".opcion").slideUp("slow");
        }
    });

    $(".opcion").click(function () {
        if (($(".opcion").css("display") === "block") || ($(window).width() <= 600)) {
            $(".opcion").slideUp("fast");
        } else {
            $(".opcion").slideDown("slow");
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 600) {
            $(".opcion").css("display"), ("block");
        } else {
            $(".opcion").css("display", "none");

        }
    });
});

function salto(id_elemento) {
    "use strict";
    var scroll = $(id_elemento).offset().top - $("#menu").height();
    $(window).scrollTop(scroll);
}

