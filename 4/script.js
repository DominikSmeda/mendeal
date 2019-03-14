
document.addEventListener("DOMContentLoaded", function (ev) {

    let spans = document.querySelectorAll('.data');

    let date = new Date();

    date.setDate(date.getDate() + 1)
    while (date.getDay() != 1) {
        date.setDate(date.getDate() + 1)
    }

    for (let s of spans) {
        s.innerText = date.toLocaleDateString().split('.')[2] + ".";
        s.innerText += date.toLocaleDateString().split('.')[1] + ".";
        s.innerText += date.toLocaleDateString().split('.')[0];
        date.setDate(date.getDate() + 1)
    }
    console.log(date);




});


