// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")

//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }

//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }

//     return validInput;
// }

$(function() {
    $(":submit").click(function(event) {
        var name = $("#fullname").val();
        var address = $("#streetaddr").val();

        if (name.length == 0) {
            $("#nameerrormsg").show();
            event.preventDefault();
        } else {
            $("#nameerrormsg").hide();
        }

        if (address.length == 0) {
            $("#addrerrormsg").show();
            event.preventDefault();
        } else {
            $("#addrerrormsg").hide();
        }
    });
});
