
document.addEventListener("DOMContentLoaded", function (ev) {
    let i = document.getElementsByTagName('input')[0]
    i.value = "Go to Google"
    i.addEventListener('click', () => {
        console.log('s');
        window.location.href = "http://www.google.com"

    })
});

