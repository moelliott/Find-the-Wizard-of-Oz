$(".no").click(function() {
    $(".oof").slideDown();
    $(".yes").fadeOut();
});

$(".yes").click(function() {
    $(".crow").slideDown();
    $(".yes, .no, .hai").fadeOut();
});

$(".no-2").dblclick(function() {
    $(".top").slideDown();
    $(".yes-2").fadeOut();
});

$(".yes-2").dblclick(function() {
    $(".pop, .pops").show();
    $(".yes-2, .no-2").fadeOut();
});

$(".no-3").click(function() {
    $(".pot").slideDown();
    $(".yes-3").fadeOut(); 
});

$(".yes-3").click(function() {
    $(".clap, .claps").slideDown();
    $(".yes-3, .no-3").fadeOut();
});

$(".no-4").click(function() {
    $(".bop").slideDown();
    $(".yes-4").fadeOut();
});

$(".yes-4").click(function() {
    $(".end, .tin").slideDown();
    $(".yes-4, .no-4").fadeOut();
});

$(".no-5").click(function() {
    $(".trip").slideDown();
    $(".yes-5").fadeOut();
});

$(".yes-5").dblclick(function() {
    $(".home").slideDown();
    $(".crow").fadeOut();
    $(".clap, .claps").fadeOut();
    $(".pop, .pops").fadeOut();
    $(".end, .tin").fadeOut();
    $(".yes-5, .no-5").fadeOut();
});

$(".yes-5").dblclick(function() {
    $("p").css("color", "#0000b0");
    $("h1").text("Congrats!! You Finished The Game!!");
});

