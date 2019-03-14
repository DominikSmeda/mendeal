


function goto(e) {
    e.preventDefault();

    let f = document.getElementById('formularz');
    let link = f.children[0].value
    if (!link.includes('http://')) {
        window.location.href = 'http://' + link;
        return;
    }
    window.location.href = link

}



