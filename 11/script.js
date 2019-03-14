
document.addEventListener("DOMContentLoaded", function (ev) {
    let divs = document.querySelectorAll('div');

    for (let div of divs) {
        div.addEventListener('click', (e) => {
            e.currentTarget.style.backgroundColor = "blue";
            e.currentTarget.style.height = (e.currentTarget.style.height.replace('px', '') / 2) + 'px'
        });
    }
});

