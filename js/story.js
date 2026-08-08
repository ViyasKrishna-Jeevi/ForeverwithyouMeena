// ==========================================
// CHAPTER 1 STORY
// ==========================================


// ==========================================
// CHAPTER 1 STORY
// ==========================================

const bgMusic = document.getElementById("story");

function playMusic() {

    if (!bgMusic) return;

    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => { });

}

function stopMusic() {

    if (!bgMusic) return;

    let fade = setInterval(() => {

        if (bgMusic.volume > 0.02) {

            bgMusic.volume -= 0.02;

        } else {

            clearInterval(fade);

            bgMusic.pause();

            bgMusic.currentTime = 0;

            bgMusic.volume = 0.35;

        }

    }, 100);

}
function startChapter() {


    const lines = [

        {
            id: "line1",
            text: "Some stories begin with a moment..."
        },

        {
            id: "line2",
            text: "But ours began with a feeling ❤️"
        },

        {
            id: "line3",
            text: "A feeling I never expected..."
        },

        {
            id: "line4",
            text: "A person I never wanted to lose..."
        },

        {
            id: "line5",
            text: "Meena... this is our little forever."
        }

    ];



    let delay = 800;



    lines.forEach((line) => {


        setTimeout(() => {


            const element =
                document.getElementById(line.id);



            element.innerHTML =
                line.text;



            element.classList.add("showLine");



        }, delay);



        delay += 1800;



    });



    setTimeout(() => {


        document
            .getElementById("chapterContinue")
            .classList.add("show");



    }, delay + 500);



}


// NEXT BUTTON


document.addEventListener("click", function (e) {

    if (e.target.id === "chapterContinue") {

        showSection("juduIntro");

        startJuduIntro();

    }

});

// ==========================================
// STORY
// ==========================================

const storyLines = [

    "There are billions of people...",

    "Yet somehow...",

    "Life made our paths cross. ❤️",

    "I never imagined...Someone could become",

    "my peace...my happiness.",

    "my favourite notification. 😊",

    "Some days we laughed...",

    "Some days we argued...",

    "But every single day...",

    "I loved you a little more. ❤️",

    "Every memory became part of my forever...",

    "Let's relive them... 📸"

];



function startStory() {

    showSection("storySection");
    playMusic();



    const box = document.getElementById("storyText");



    let index = 0;



    nextLine();



    function nextLine() {



        if (index >= storyLines.length) {

            setTimeout(() => {

                startMemory();
                stopMusic();
            }, 1500);

            return;
            
        }



        box.style.opacity = "1";



        box.innerHTML =

            `<div class="storyLine">${storyLines[index]}</div>`;



        index++;



        setTimeout(nextLine, 2200);
       


    }
    

}