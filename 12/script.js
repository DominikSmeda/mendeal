
document.addEventListener("DOMContentLoaded", function (ev) {
    let divs = document.querySelectorAll('div');

    for (var i = 0; i < divs.length; i++) {

        divs[i].addEventListener('click', function (e) {
            var max = parseInt(e.target.offsetWidth)
            var kolor = 255 * (max - e.offsetX) / max;
            e.target.style.backgroundColor = 'rgb(' + kolor + ',' + kolor + ',' + kolor + ')';
        })
    }
});

