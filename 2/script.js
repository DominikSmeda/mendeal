
document.addEventListener("DOMContentLoaded", function (ev) {

    let odp = confirm('Chcesz liczbe czy mam pakować walize?');
    if (odp) {
        document.querySelector('input').value = Math.floor(Math.random() * 7 + 3);

    }
    else {
        alert('O kurwa ale szkoda!');
    }
});

