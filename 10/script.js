
document.addEventListener("DOMContentLoaded", function (ev) {

    let ps = document.querySelectorAll('p');

    for (let p of ps) {
        p.addEventListener('mouseover', (e) => {
            e.currentTarget.style.fontWeight = "800"


        })
    }
});

