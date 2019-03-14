
document.addEventListener("DOMContentLoaded", function (ev) {
    let imnaz = prompt('Podaj imię i nazwisko');
    let imie = imnaz.split(' ')[0];
    let nazwisko = imnaz.split(' ')[1];
    let div = document.createElement('div');
    let d = document.createElement('div');
    div.innerText = String(imie);
    document.body.appendChild(div)
    div.appendChild(d);
    d.innerText = nazwisko;

    div.addEventListener('click', () => {
        alert(imie)
    })
    d.addEventListener('click', (e) => {
        e.stopPropagation();
        alert(nazwisko)
    })

});

