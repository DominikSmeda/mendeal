
document.addEventListener("DOMContentLoaded", function (ev) {

    for (let i = 0; i < 6; i++) {
        let b = document.createElement('button');
        b.innerText = i
        b.onclick = function () {
            alert(i)
        }
        document.body.appendChild(b)
    }
});

