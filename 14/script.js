
document.addEventListener("DOMContentLoaded", function (ev) {
    let input = document.querySelectorAll('input')[1];

    input.addEventListener('focusin', (e) => {
        e.target.style.backgroundColor = "#888888"
    });
    input.addEventListener('focusout', (e) => {
        e.target.style.backgroundColor = "#FFFFFF"
    });
});

