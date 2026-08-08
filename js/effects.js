// ==========================================
// FOREVER WITH YOU
// EFFECTS
// ==========================================

window.addEventListener("load", () => {

    createStars();

    startHearts();

    startShootingStars();

});


// ==========================================
// STARS
// ==========================================

function createStars() {

    const container = document.getElementById("stars");

    const totalStars = window.innerWidth < 768 ? 120 : 220;

    for (let i = 0; i < totalStars; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";

        star.style.height = size + "px";

        star.style.animationDuration = (1.5 + Math.random() * 3) + "s";

        star.style.animationDelay = (Math.random() * 3) + "s";

        container.appendChild(star);

    }

}


// ==========================================
// FLOATING HEARTS
// ==========================================

function startHearts() {

    const container = document.getElementById("hearts");

    const emojis = ["❤️", "💖", "💕", "💗"];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.bottom = "-40px";

        heart.style.fontSize = (18 + Math.random() * 18) + "px";

        heart.style.animationDuration = (6 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 600);

}


// ==========================================
// SHOOTING STARS
// ==========================================

function startShootingStars() {

    const container = document.getElementById("shootingStars");

    setInterval(() => {

        const star = document.createElement("div");

        star.className = "shootingStar";

        star.style.top = Math.random() * 35 + "%";

        star.style.left = (70 + Math.random() * 20) + "%";

        container.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 1500);

    }, 5000);

}