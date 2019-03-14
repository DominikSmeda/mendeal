
document.addEventListener("DOMContentLoaded", function (ev) {
    setInterval(() => {
        let k = new Kolo(Math.floor(Math.random() * 100) / 10)
        k.wstaw()
        k.obracaj();
    }, 200)
});

class Kolo {
    constructor(speed) {
        this.speed = speed;
        this.img = document.createElement('img');
        this.img.src = 'http://mendela.pl/javascript/round.png';
    }

    wstaw() {

        let x = Math.random() * (window.innerWidth - 65);
        let y = Math.random() * (window.innerHeight - 65);

        this.img.style.position = "absolute";
        this.img.style.left = x + "px";
        this.img.style.top = y + "px";
        document.body.appendChild(this.img);
    }

    obracaj() {
        this.img.classList.add('rotating')
        console.log(this.speed);

        this.img.style.animationDuration = this.speed + "s";
    }
}

