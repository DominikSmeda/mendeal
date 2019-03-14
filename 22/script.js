
document.addEventListener("DOMContentLoaded", function (ev) {

    let divs = document.querySelectorAll('div');
    var can = false;
    var timer1;
    var timer2;
    divs[0].addEventListener('mouseover', (e) => {
        reset()
        e.preventDefault();
        e.stopPropagation()
        can = true;
        animate(0, 1)

    })

    divs[1].addEventListener('mouseover', (e) => {
        reset()
        e.preventDefault();
        e.stopPropagation()
        can = true;
        animate(1, 0)
    })

    divs[0].addEventListener('mouseleave', reset);
    divs[1].addEventListener('mouseleave', reset);

    function reset() {
        clearTimeout(timer1)
        clearTimeout(timer2)
        can = false;
        divs[0].style.backgroundColor = "white"
        divs[1].style.backgroundColor = "white"
    }

    function animate(i, j) {
        timer1 = setTimeout(() => {
            if (can) {
                divs[i].style.backgroundColor = "red"
                timer2 = setTimeout(() => {
                    if (can) {
                        divs[j].style.backgroundColor = "blue"
                    }
                }, 1000)
            }
        }, 1000);

    }
});

