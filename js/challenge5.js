// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.queryS		elector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }

$(function() {
    var html =
        '<img class="preview" alt = "" src = "" tabindex = "0">' +
        '<img class="preview" alt = "" src = "" tabindex = "0">' +
        '<img class="preview" alt = "" src = "" tabindex = "0">';
    $(document.body).append(html);
    //hide the extra purple background space by aligning the height of the image div with my images
    $("#image").css(
        "height",
        "250px",
        "line-height",
        "100%",
        "display",
        "incline-block"
    );
    // $(".preview").css("margin-left", "4.6%");

    $(".preview").each(function() {
        $(".preview:nth-of-type(1)").attr({
            src:
                "https://github.com/SophieNiu/jqueryhw/blob/master/photos/bar.jpg?raw=true",
            alt: "This is My bar"
        });
        $(".preview:nth-of-type(2)").attr({
            src:
                "https://github.com/SophieNiu/jqueryhw/blob/master/photos/bike.jpg?raw=true",
            alt: "This is My bike"
        });
        $(".preview:nth-of-type(3)").attr({
            src:
                "https://github.com/SophieNiu/jqueryhw/blob/master/photos/building.jpg?raw=true",
            alt: "This is My building"
        });
        $(".preview:nth-of-type(4)").attr({
            src:
                "https://github.com/SophieNiu/jqueryhw/blob/master/photos/coke.jpg?raw=true",
            alt: "This is My coke"
        });
        $(".preview:nth-of-type(5)").attr({
            src:
                "https://github.com/SophieNiu/jqueryhw/blob/master/photos/walking.jpg?raw=true",
            alt: "This is My walking"
        });
        $(".preview:nth-of-type(6)").attr({
            src:
                "https://github.com/SophieNiu/jqueryhw/blob/master/photos/cctv.jpg?raw=true",
            alt: "This is My cctv"
        });
    });

    var msg = "Hover over an image below.";
    $(".preview").each(function() {
        $(this)
            .mouseover(function() {
                $("#image")
                    .css("backgroundImage", "url(" + $(this).attr("src") + ")")
                    .text($(this).attr("alt"));
            })
            .mouseout(function() {
                $("#image")
                    .css("backgroundImage", "")
                    .text(msg);
            })
            .focus(function() {
                $("#image")
                    .css("backgroundImage", "url(" + $(this).attr("src") + ")")
                    .text($(this).attr("alt"));
            })
            .blur(function() {
                $("#image")
                    .css("backgroundImage", "")
                    .text(msg);
            });
    });
});
