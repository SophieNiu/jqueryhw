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
        var checked = $("input[name=fruit]:checked").length;
        if (checked > 0) {
            return true;
        } else {
            alert("You must pick a fruit!");
            event.preventDefault();
        }
    });
});
