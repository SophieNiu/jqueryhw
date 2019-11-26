// ch3form.onsubmit = function() {
// var fruit =
// document.querySelectorAll('input[name="fruit"]')

//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;}

// Advanced Answer
//     var checked = document.querySelector('input[name="fruit"]:checked');
//     console.log(checked.value);
//     if(document.querySelector('input[name="fruit"]:checked'))
//         return false;

//     alert("You must pick a fruit!")
//     return false;
// }

$(function() {
    $(":submit").click(function(event) {
        var fruit_checked = $("input[name=fruit]:checked").length;
        var stand_checked = $("input[name=standing]:checked").length;
        if (fruit_checked > 0 && stand_checked > 0) {
            return true;
        } else {
            alert("You must pick a fruit and a standing!");
            event.preventDefault();
        }
    });
});
