
document.addEventListener("DOMContentLoaded", function (ev) {

    let data = new Date();

    let div = document.getElementById('data');
    let r = ""

    if (data.getDate() < 10) r += '0'
    r += data.getDate()
    r += '/'
    if (Number(data.getMonth() + 1) < 10) r += '0'
    r += Number(data.getMonth() + 1)
    r += '/'
    r += data.getFullYear();
    r += "   ";
    r += data.getHours();
    r += ":"
    r += data.getMinutes();
    r += ":"
    r += data.getSeconds()
    div.innerText = r;
});

