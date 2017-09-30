$(function () {
    var slideDelay = 4500;
    var animDuration = 2000;

    var currentSlide = 1;
    var width = $("body").width();

    var $slider = $("#slider");
    var $sliderContainer = $slider.find("#sliderContainer");
    var $slides = $sliderContainer.find(".slide");
    var lastSlide = $slides.length;

    var circleHTML = "";
    var currentCircle;
    var previousCircle;

    var interval;

    //---------------create circles    
    for (var i = currentSlide; i <= lastSlide; i++) {
        circleHTML += '<div class="circle" slide-id="' + i + '"></div>';
    }
    //---------------paste circles    
    $slider.append("<div class='bar'>" + circleHTML + "</div>");

    //---------------check and activate circles
    function circleActivate() {
        if (previousCircle !== undefined) {
            previousCircle.removeClass("active");
        }
        currentCircle = $(".circle[slide-id='" + currentSlide + "']");
        currentCircle.addClass("active");
        previousCircle = currentCircle;
    }
    //---------Upload Photo
    function photoUpload() {
        let count = currentSlide + 1;
        $(".slide:nth-child(" + count + ")").css("background", "url(img/slides/" + count + ".jpg)");
    }

    function scrollToCurrent() {
        $("#sliderContainer").animate({ //scroll previous
            scrollLeft: $("body").width() * currentSlide
        }, 700);
    }

    //---------------play slider
    function play() {

        circleActivate();

        $(".slide:nth-child(" + (currentSlide) + ")").css("background", "url(img/slides/" + (currentSlide) + ".jpg)");

        interval = setInterval(function () {

            photoUpload();

            $("#sliderContainer").animate({
                scrollLeft: "+=" + width
            }, animDuration, "swing");

            currentSlide++;

            if (currentSlide === lastSlide + 1) {
                currentSlide = 1;
                $("#sliderContainer").animate({
                    scrollLeft: 0
                }, 1000);

            }

            circleActivate();
            console.log(currentSlide);

        }, slideDelay)
    }

    //------stop slider
    function stop() {
        clearInterval(interval);
    }

    //circle click event handler
    $(".circle").click(function () {

        stop(); //stop slider

        $("#sliderContainer").animate({ //scroll to certain block
            scrollLeft: $("body").width() * ($(this).attr("slide-id") - 1)
        }, animDuration, "swing");

        currentSlide = $(this).attr("slide-id"); //change current slide

        photoUpload();

        circleActivate(); //activate properly circle

        play(); //play slider again
    })

    //buttons previous and next event handler
//    $(".btn").click(function () {
//        stop();
//        photoUpload();
//        if ($(this).attr("id") == "next") {
//            $("#sliderContainer").animate({ //scroll previous
//                scrollLeft: $("body").width() * (currentSlide)
//            }, 700);
//            //            currentSlide -=1;
//            //             alert($("body").width() * (currentSlide));
//        } else {
//            photoUpload();
//
//            $("#sliderContainer").animate({ //scroll previous
//                scrollLeft: $("body").width() * (currentSlide - 1)
//            }, 700);
//            //            currentSlide +=1;
//            //            alert( $("body").width() * (currentSlide - 1));
//        }
//        circleActivate();
//        //        play();
//
//    })

    play();

});
