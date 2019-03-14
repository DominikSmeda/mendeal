
document.addEventListener("DOMContentLoaded", function (ev) {

    let x = "30"
    document.querySelectorAll('input')[1].value = Number(x) + Math.floor(Math.random() * 11)
});

