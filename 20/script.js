
document.addEventListener("DOMContentLoaded", function (ev) {

});



document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    div = document.createElement('div');
    div.innerText = "Nie skopiujesz!";
    document.body.appendChild(div);
    div.style.position = 'absolute'
    div.style.top = e.clientY + "px"
    div.style.left = e.clientX + "px"
    div.style.border = "1px solid black"

    t(div)
    function t(d) {
        setTimeout(() => {
            d.remove();
        }, 1000)
    }
})