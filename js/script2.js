var count = $(".slide").length;

var prevSlide = $(".slide:nth-child(1)");
var currentSlide;
var currentSlideId;

function addNav() {
    var navBtn = [];
    for (var i = 1; i <= count; i++) {
        navBtn[i] = '<div class="nav-btn" slide-id="' + i + '"><p>0' + i + '</p></div>';
    }
    $("#slider").append("<div class='bar'>" + navBtn.join(" ") + "</div>");
}

addNav();

function photoUpload(n) {
    currentSlide.css("background", "url(img/slides/" + n + ".jpg)");
}


$(".nav-btn").click(function () {
    currentSlideId = $(this).attr("slide-id");

    if (prevSlide !== undefined) {
        prevSlide.removeClass("active");
    }

    currentSlide = $(".slide:nth-child(" + currentSlideId + ")");

    currentSlide.addClass("active");

    photoUpload(currentSlideId);

    prevSlide = currentSlide;
})

$(".slide:nth-child(1)").css("background", "url(img/slides/1.jpg)");

function play(){
    setInterval(function(){
        
    },4000)
}