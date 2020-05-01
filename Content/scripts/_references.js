$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 7, //10 items above 1000px browser width
        itemsCustom: [[0, 2],[380,3 ], [641, 4], [941, 5], [1024, 6], [1280, 7], [1680, 8], [1900, 9]],
    });

    // Custom Navigation Events
    $(".btn-floating3").click(function () {
        owl.trigger('owl.next');
    });;
    $(".btn-floating2").click(function () {
        owl.trigger('owl.prev');
    });
   

});


function Openmenu() {
    $('.dropdown-menu').toggleClass("active");
    $('.mini-menu .icon-menu').toggleClass("active");
}