window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 3000);

}

function createHeart() {

    let heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 40) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 300);

const isMobile = window.innerWidth < 768;

setInterval(createHeart, isMobile ? 700 : 300);

document.getElementById("openBtn").onclick = function () {

    alert("❤️ ಇನ್ನೂ ಹಲವಾರು ಸರ್ಪ್ರೈಸ್‌ಗಳು ನಿನ್ನನ್ನು ಕಾಯುತ್ತಿವೆ ❤️");

}


// Typing Effect

const message = `

ನನ್ನ ಪ್ರೀತಿಯವಳೇ ❤️

ಇಂದು ನಿನ್ನ ಹುಟ್ಟುಹಬ್ಬ.

ನೀನು ನನ್ನ ಜೀವನಕ್ಕೆ ಬಂದ ನಂತರ
ಪ್ರತಿ ದಿನವೂ ಸುಂದರವಾಗಿದೆ.

ನಿನ್ನ ನಗು ನನ್ನ ಸಂತೋಷ.

ನಿನ್ನ ಪ್ರೀತಿ ನನ್ನ ಶಕ್ತಿ.

ನೀನು ನನ್ನ ಜೀವನದ
ಅತ್ಯಂತ ಸುಂದರ ಉಡುಗೊರೆ.

ನಿನ್ನ ಎಲ್ಲಾ ಕನಸುಗಳು ನನಸಾಗಲಿ.

ನಾನು ಯಾವಾಗಲೂ
ನಿನ್ನ ಜೊತೆ ಇರುತ್ತೇನೆ.

❤️ Happy Birthday My Love ❤️

`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

setTimeout(typeWriter, 3500);

document.getElementById("giftBtn").onclick = function () {

    alert("🎁 ಇನ್ನೂ ದೊಡ್ಡ ಸರ್ಪ್ರೈಸ್ ಬಾಕಿಯಿದೆ ❤️");

}


// Gift

const gift = document.getElementById("giftBox");

if (gift) {

    gift.addEventListener("click", () => {

        document.getElementById("giftMessage").innerHTML = "❤️ I Love You Forever ❤️";

        confetti();

    });

}

// Simple Confetti

function confetti() {

    const totalConfetti = window.innerWidth < 768 ? 80 : 200;

    for (let i = 0; i < totalConfetti; i++) {

        let c = document.createElement("div");

        c.innerHTML = "🎊";

        c.style.position = "fixed";

        c.style.left = Math.random() * 100 + "vw";

        c.style.top = "-20px";

        c.style.fontSize = "30px";

        c.style.transition = "5s";

        document.body.appendChild(c);

        setTimeout(() => {

            c.style.top = "100vh";

        }, 50);

        setTimeout(() => {

            c.remove();

        }, 5000);

    }

}

// Fireworks Button

const foreverBtn = document.getElementById("fireworkBtn");

if (foreverBtn) {

    foreverBtn.addEventListener("click", () => {

        confetti();

        heartExplosion();

        showFinalMessage();

    });

}

function heartExplosion() {

    for (let i = 0; i < 150; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.top = "100vh";

        heart.style.fontSize = (20 + Math.random() * 40) + "px";

        heart.style.transition = "4s linear";

        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.top = "-100px";

            heart.style.transform = "rotate(720deg)";

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

}

function showFinalMessage() {

    let box = document.createElement("div");

    box.id = "finalLove";

    box.innerHTML = `

<h1>❤️ Happy Birthday ❤️</h1>

<h2>ನನ್ನ ಪ್ರೀತಿಯವಳೇ</h2>

<p>

ನಿನ್ನ ನಗು ನನ್ನ ಸಂತೋಷ 😊<br>

ನಿನ್ನ ಪ್ರೀತಿ ನನ್ನ ಶಕ್ತಿ ❤️<br>

ನೀನು ನನ್ನ ಜೀವನದ ಅತ್ಯಂತ ಸುಂದರ ಉಡುಗೊರೆ 💖<br><br>

I Love You Forever ❤️🌹

</p>

`;

    document.body.appendChild(box);

}


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play()
            .then(() => {

                musicBtn.innerHTML = "⏸ Pause Music";

            })
            .catch(err => {

                console.log(err);

            });

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

});