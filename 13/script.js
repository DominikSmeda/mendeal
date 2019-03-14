
document.addEventListener("DOMContentLoaded", function (ev) {
    let img = document.querySelector('img');
    img.addEventListener('click', (e) => {
        alert(e.target.src)

    });
});

