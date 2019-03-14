

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        let input = document.querySelector('input');
        let val = input.value;
        if (!isNaN(val) && val != "") {
            let timer = setInterval(() => {
                input.value -= 1;
                if (input.value <= 0) {
                    clearInterval(timer);
                }
            }, 500)
        }
        else {
            input.value = "";
            alert('Wpisz liczbę');

        }
    }
})