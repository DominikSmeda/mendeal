
document.addEventListener("DOMContentLoaded", function (ev) {
    let a = document.getElementById('area');
    a.style.borderStyle = "dashed"
    let can = false;
    a.addEventListener('focusin', () => {
        can = true
    })
    a.addEventListener('focusout', () => {
        can = false
    })
    document.addEventListener('keydown', (e) => {
        if (!can) return

        if (a.style.borderStyle == "dashed")
            a.style.borderStyle = "dotted"
        else
            a.style.borderStyle = "dashed"

    })
});



