// ==========================================
// MEMORYS
// ==========================================
const memories = [

    {
        type: "image",
        file: "images/memories/memories1.png",
        title: "The Beginning ❤️",
        description: "The day that changed my life forever."
    },

    {
        type: "image",
        file: "images/memories/memories2.png",
        title: "My Favourite Smile 😊",
        description: "One smile from you makes every bad day brighter."
    },

    {
        type: "image",
        file: "images/memories/memories3.png",
        title: "A Beautiful Memory 🌸",
        description: "Every little moment with you became unforgettable."
    },

    {
        type: "video",
        file: "videos/memories4.mp4",
        title: "Our Special Video ❤️",
        description: "One video... a thousand unforgettable memories."
    },

    {
        type: "image",
        file: "images/memories/memories5.png",
        title: "Another Precious Memory 💖",
        description: "Every picture reminds me how lucky I am."

    },

    {
        type: "image",
        file: "images/memories/memories6.png",
        title: "Our lovable day",
        description: "Down the knee, but rising with the love of my life."
    },

    {
        type: "image",
        file: "images/memories/memories7.png",
        title: "Your Happy Place 🥰",
        description: "Wherever you are, that's where my heart belongs."
    },

    {
        type: "image",
        file: "images/memories/memories8.png",
        title: "Forever With You ❤️",
        description: "Every memory with you is my favourite memory."
    }

];



let currentMemory = 0;



function startMemory() {

    showSection("memorySection");

    currentMemory = 0;

    loadMemory();

}



function loadMemory() {

    const card = document.getElementById("memoryCard");
    const media = document.getElementById("memoryMedia");
    const title = document.getElementById("memoryTitle");
    const description = document.getElementById("memoryDescription");
    const button = document.getElementById("nextMemory");

    card.classList.remove("show");

    setTimeout(() => {

        media.innerHTML = "";

        const memory = memories[currentMemory];

        if (memory.type === "image") {

            media.innerHTML = `
                <img
                    id="memoryImage"
                    src="${memory.file}"
                    alt="${memory.title}">
            `;

        } else {

            media.innerHTML = `
                <video
                    id="memoryVideo"
                    controls
                    playsinline
                    preload="metadata">

                    <source
                        src="${memory.file}"
                        type="video/mp4">

                    Your browser does not support the video tag.

                </video>
            `;
        }

        title.textContent = memory.title;
        description.textContent = memory.description;

        if (currentMemory === 6) {

            startMemoryJudu();

        } else {

            hideMemoryJudu();

        }

        card.classList.add("show");
        button.classList.add("show");

    }, 100);
}
document.getElementById("nextMemory").addEventListener("click", function () {

    currentMemory++;

    if (currentMemory >= memories.length) {

        startLetter();
        return;
    }

    loadMemory();

});

function startMemoryJudu() {

    const judu = document.getElementById("memoryJudu");
    const dog = document.getElementById("memoryJuduDog");
    const bubble = document.getElementById("memoryJuduBubble");
    const text = document.getElementById("memoryJuduText");

    const bark = document.getElementById("barkSound");

    // Running frames
    const runFrames = [
        "images/judu/run1.png",
        "images/judu/run2.png",
        "images/judu/run3.png",
        "images/judu/run4.png",
        "images/judu/run5.png"
    ];

    judu.style.display = "block";

    bubble.classList.remove("show");
    text.innerHTML = "";

    dog.classList.remove("juduBreathing");

    dog.style.transition = "left 2.5s linear";
    dog.style.left = "-220px";

    // ==========================
    // RUN IN
    // ==========================

    let frame = 0;

    const runAnimation = setInterval(() => {

        dog.src = runFrames[frame];

        frame++;

        if (frame >= runFrames.length) {

            frame = 0;

        }

    }, 100);

    setTimeout(() => {

        dog.style.left = "45px";

    }, 100);

    // ==========================
    // ARRIVED
    // ==========================

    setTimeout(() => {

        clearInterval(runAnimation);

        dog.src = "images/judu/sit.png";

        dog.classList.add("juduBreathing");

        if (bark) {

            bark.currentTime = 0;
            bark.play().catch(() => { });

        }

        setTimeout(() => {

            dog.src = "images/judu/bark.png";

        }, 150);

        setTimeout(() => {

            dog.src = "images/judu/sit.png";

        }, 600);

    }, 2500);

    // ==========================
    // SPEECH BUBBLE
    // ==========================

    setTimeout(() => {

        bubble.classList.add("show");

        text.innerHTML =
            "Woof! 🐶<br><br>woof..that's me with my meena... ❤️";

    }, 3100);

    // ==========================
    // LEAVE
    // ==========================

    // ==========================
    // LEAVE
    // ==========================

    setTimeout(() => {

        bubble.classList.remove("show");

        dog.classList.remove("juduBreathing");

        let leaveFrame = 0;

        const leaveAnimation = setInterval(() => {

            dog.src = runFrames[leaveFrame];

            leaveFrame = (leaveFrame + 1) % runFrames.length;

        }, 100);

        // Run towards the right
        dog.style.transition = "left 2.5s linear";
        dog.style.left = (window.innerWidth + 250) + "px";

        setTimeout(() => {

            clearInterval(leaveAnimation);

            judu.style.display = "none";

        }, 2600);

    }, 9000);

}
function hideMemoryJudu() {

    const judu = document.getElementById("memoryJudu");
    const dog = document.getElementById("memoryJuduDog");
    const bubble = document.getElementById("memoryJuduBubble");

    bubble.classList.remove("show");

    dog.src = "images/judu/run1.png";

    dog.style.left = "-260px";

    setTimeout(() => {

        judu.style.display = "none";

    }, 800);

}