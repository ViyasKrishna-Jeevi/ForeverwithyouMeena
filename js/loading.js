// =========================================
// LOADING SCREEN
// =========================================

const loadingMessages = [

    "Connecting to my heart... ❤️",

    "Finding our memories... 📸",

    "Collecting your smiles... 😊",

    "Counting every heartbeat... 💓",

    "Wrapping your birthday surprise... 🎁",

    "Adding a little magic... ✨",

    "I am coming to you... 🚀",

    "Almost there... ❤️"

];

let loadingIndex = 0;

let progress = 0;

const loadingText = document.getElementById("loadingText");

const progressBar = document.getElementById("progressBar");

const loadingPercent = document.getElementById("loadingPercent");

const typingSound = document.getElementById("typingSound");


// =========================================
// START
// =========================================


// =========================================
// LOADING
// =========================================

function startLoading() {

    changeMessage();

    const timer = setInterval(function () {

        progress++;

        progressBar.style.width = progress + "%";

        loadingPercent.innerHTML = progress + "%";

        if (progress % 12 === 0) {

            changeMessage();

            createMiniHearts();

        }

        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                showChapterOne();

            }, 800);

        }

    }, 90);

}


// =========================================
// MESSAGE
// =========================================

function changeMessage() {

    loadingText.classList.remove("fadeIn");

    void loadingText.offsetWidth;

    loadingText.innerHTML = loadingMessages[loadingIndex];

    loadingText.classList.add("fadeIn");

    loadingIndex++;

    if (loadingIndex >= loadingMessages.length) {

        loadingIndex = loadingMessages.length - 1;

    }

}


// =========================================
// MINI HEARTS
// =========================================

function createMiniHearts() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = "50%";

    heart.style.top = "60%";

    heart.style.fontSize = (18 + Math.random() * 15) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.transition = "all 1.4s ease";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =

            `translate(${(Math.random() * 180) - 90}px,-120px) scale(1.6)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 1400);

}


// =========================================
// NEXT SCREEN
// =========================================

// =========================================
// NEXT SCREEN
// =========================================

function showChapterOne() {


    if (typeof showSection === "function") {


        showSection("chapter1");


    }
    else {


        document
            .getElementById("loading-screen")
            .classList.add("hidden");


        document
            .getElementById("chapter1")
            .classList.remove("hidden");


    }



    setTimeout(() => {


        if (typeof startChapter === "function") {


            startChapter();


        }


    }, 300);



}