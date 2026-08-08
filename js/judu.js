// ==========================================
// JUDU INTRO
// ==========================================

const judu = document.getElementById("judu");
const juduBubble = document.getElementById("juduBubble");
const followButton = document.getElementById("followJudu");
const barkSound = document.getElementById("barkSound");

const runFrames = [

    "images/judu/run1.png",
    "images/judu/run2.png",
    "images/judu/run3.png",
    "images/judu/run4.png",
    "images/judu/run5.png"

];

let frame = 0;
let runAnimation;


// ==========================================
// START JUDU
// ==========================================

function startJuduIntro() {

    judu.style.left = "-220px";

    juduBubble.classList.remove("show");

    followButton.classList.remove("show");

    judu.classList.remove("juduBreathing");

    animateRun();

}



// ==========================================
// RUN
// ==========================================

function animateRun() {

    let position = -220;

    runAnimation = setInterval(() => {

        frame++;

        if (frame >= runFrames.length) {

            frame = 0;

        }

        judu.src = runFrames[frame];

    }, 90);



    const move = setInterval(() => {

        position += 4;

        judu.style.left = position + "px";



        const stopPoint = (window.innerWidth / 2) - (judu.offsetWidth / 2) ;



        if (position >= stopPoint) {

            clearInterval(move);

            clearInterval(runAnimation);

            juduArrived();

        }

    }, 16);

}



// ==========================================
// AFTER ARRIVAL
// ==========================================

function juduArrived() {

    judu.src = "images/judu/sit.png";

    judu.classList.add("juduBreathing");



    if (barkSound) {

        barkSound.currentTime = 0;

        barkSound.play().catch(() => { });

    }



    createHeartBurst();



    setTimeout(() => {

        juduBubble.classList.add("show");

    }, 400);



    setTimeout(() => {

        followButton.classList.add("show");

    }, 1200);

}



// ==========================================
// HEART BURST
// ==========================================

function createHeartBurst() {

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.bottom = "230px";

        heart.style.fontSize = (14 + Math.random() * 10) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "999";

        heart.style.transition = "1.5s ease";



        document.body.appendChild(heart);



        requestAnimationFrame(() => {

            heart.style.transform =

                `translate(${(Math.random() * 220) - 110}px,-${120 + Math.random() * 100}px) scale(1.5)`;

            heart.style.opacity = "0";

        });



        setTimeout(() => {

            heart.remove();

        }, 1500);

    }

}



// ==========================================
// FOLLOW BUTTON
// ==========================================

followButton?.addEventListener("click", () => {

    if (typeof showSection === "function") {

        showSection("birthdayGate");

    }

});