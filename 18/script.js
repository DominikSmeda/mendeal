
document.addEventListener("DOMContentLoaded", function (e) {
    console.log(document.styleSheets);//czy chodzi mu o to czy o to na dole
    e.target.innerHTML = e.target.offsetWidth + " x " + e.target.offsetHeight;
});

