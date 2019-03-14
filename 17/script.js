
document.addEventListener("DOMContentLoaded", function (ev) {

});

function losuj() {
    var los = Math.floor(Math.random() * 25) + 65;
    let input = document.getElementsByName('znak')[0];
    input.value = String.fromCharCode(los);

}

