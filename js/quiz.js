

const dgMusic = document.getElementById("starting");

function blayMusic() {

    if (!dgMusic) return;

    dgMusic.volume = 0.35;

    dgMusic.play().catch(() => { });

}

function topMusic() {

    if (!dgMusic) return;

    let fade = setInterval(() => {

        if (dgMusic.volume > 0.02) {

            dgMusic.volume -= 0.02;

        } else {

            clearInterval(fade);

            dgMusic.pause();

            dgMusic.currentTime = 0;

            dgMusic.volume = 0.35;

        }

    }, 100);

}
const introJudu = [

    "Woof! 🐶",
    "Wait...",
    "Before she answers anything...",
    "There are a few secrets..",
    "he has been hiding for a long time.",
    "I probably shouldn't show them...",
    "But today is special ❤️"
];

let introFinished = false;
const secretStory = [

    {
        question: "If you could relive one day forever...",

        options: [
            "❤️ Our First Meeting",
            "❤️ Our Longest Conversation",
            "❤️ Every Day With You",
            "❤️ I Can't Choose"
        ],

        judu: [
            "Woof...",
            "Can I tell you a secret?",
            "He's told me about your first meeting...",
            "At least 143 times everyday 😂",
            "I think he likes you too much."
        ],

        title: "FirstMeeting❤️",

        text:
            `You probably don't remember...
But I remember everything.
The way you smiled.
The way you looked at me.
That day quietly became
one of the happiest
days of my life.`
    },

    {
        question: "What is my favourite thing about you?",

        options: [
            "❤️ Your Smile",
            "❤️ Your Eyes",
            "❤️ Your Kindness",
            "❤️ Everything"
        ],

        judu: [
            "Woof...",
            "He always smiles..",
            "whenever he sees your photos.",
            "I think your smile is his weakness."
        ],

        title: "Smile🥰",

        text:
            `Some people
have favourite songs.
Some people
have favourite places.
I have
a favourite smile.
It's yours.`
    },

    {
        question: "Which superpower describes me?",

        options: [
            "😂 Sleeping",
            "❤️ Loving You",
            "🍕 Eating",
            "🎮 Gaming"
        ],

        judu: [
            "Woof 😂",
            "Wrong...",
            "His real superpower...",
            "Talking and thinking about Meena every second.",
            "He can't sleep if your TEXT is missing or..",
            "your LOVE YOU is missing 🥺"
        ],

        title: "SuperPower",

        text:
            `I've never met someone
who could turn
every conversation
back to one person.
That person...
is you ❤️`
    },

    {
        question: "If I had one wish...",

        options: [
            "❤️ More Money",
            "❤️ Travel",
            "❤️ A Future With Us",
            "❤️ Nothing"
        ],

        judu: [
            "Woof...",
            "He dreams a lot.",
            "Guess who's in every dream?",
            "You ❤️"
        ],

        title: "Future",

        text:`Every dream
Every future plan
Every little wish
is with you.`
    },

    {
        question: "Who would I choose forever?",

        options: [
            "❤️ Me",
            "❤️ You",
            "❤️ Us",
            "❤️ No one"
        ],

        judu: [
            "Woof...",
            "This is the last secret.",
            "I think...",
            "He has something important to ask you."
        ],

        title: "LastSecret",

        text:
            `I always expect a 
            random txt, calls and meetups
            with you, because I only 
            have you❤️ 
            one more is left..
            I will say next..`
    }

];


// ==========================================
// VARIABLES
// ==========================================

let currentQuestion = 0;

const answers = [];

function startSecret() {

    showSection("secretSection");
    blayMusic();

    introFinished = false;
    currentQuestion = 0;

    const heading = document.getElementById("secretHeading");
    const subHeading = document.getElementById("secretSubHeading");
    const quiz = document.getElementById("quizCard");

    // Remove animation classes
    heading.classList.remove("showSecret");
    subHeading.classList.remove("showSecret");
    quiz.classList.remove("showSecret");

    // Hide everything
    heading.style.display = "none";
    subHeading.style.display = "none";
    quiz.style.display = "none";

    document.getElementById("folderContainer").style.display = "none";
    document.getElementById("secretFile").style.display = "none";

    showJudu();
}
function showQuestion() {

    const story = secretStory[currentQuestion];

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) + " / " + secretStory.length;

    document.getElementById("questionText").textContent =
        story.question;

    const options =
        document.getElementById("quizOptions");

    options.innerHTML = "";

    story.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "quizOption";

        button.textContent = option;

        button.onclick = function () {

            selectAnswer(option);

        }

        options.appendChild(button);

    });

}

async function selectAnswer(answer) {

    // Save locally
    answers.push({

        questionNo: currentQuestion + 1,

        question: secretStory[currentQuestion].question,

        answer: answer

    });

    // Save this answer to Firebase
    try {

        await window.addDoc(

            window.collection(window.db, "QuizAnswers"),

            {

                questionNo: currentQuestion + 1,

                question: secretStory[currentQuestion].question,

                answer: answer,

                createdAt: window.serverTimestamp()

            }

        );

        console.log("Answer saved to Firebase");

    }
    catch (error) {

        console.error("Firebase Error:", error);

    }

    console.log(answers);

    document.getElementById("quizCard").style.display = "none";

    showJudu();

}

// ==========================================
// JUDU ANIMATION
// ==========================================

function showJudu() {

    const judu = document.getElementById("secretJudu");
    const dog = document.getElementById("secretJuduDog");
    const bubble = document.getElementById("secretBubble");
    const bubbleText = document.getElementById("secretBubbleText");

    judu.style.display = "block";

    bubble.classList.remove("show");
    bubbleText.textContent = "";

    dog.src = "images/judu/run1.png";

    dog.style.left = "-220px";
    dog.style.transform = "";

    const runFrames = [
        "images/judu/run1.png",
        "images/judu/run2.png",
        "images/judu/run3.png",
        "images/judu/run4.png",
        "images/judu/run5.png"
    ];

    let frame = 0;

    const runAnimation = setInterval(() => {

        dog.src = runFrames[frame];

        frame++;

        if (frame >= runFrames.length) {

            frame = 0;

        }

    }, 100);

    let position = -220;

    const stopPoint = 80;

    const move = setInterval(() => {

        position += 5;

        dog.style.left = position + "px";

        if (position >= stopPoint) {

            clearInterval(move);
            clearInterval(runAnimation);

            juduSit();

        }

    }, 16);

}

function juduSit() {

    const dog = document.getElementById("secretJuduDog");

    dog.src = "images/judu/sit.png";

    dog.classList.add("juduBreathing");

    if (typeof playBark === "function") {

        playBark();

    }

    setTimeout(() => {

        showBubble();

    }, 500);

}

function showBubble() {

    const bubble = document.getElementById("secretBubble");

    bubble.classList.add("show");

    typeDialogue();

}

function typeDialogue() {

    const lines = introFinished
        ? secretStory[currentQuestion].judu
        : introJudu;

    const box =
        document.getElementById("secretBubbleText");

    box.innerHTML = "";

    let line = 0;

    function nextLine() {

        if (line >= lines.length) {

            setTimeout(() => {

                juduLeave();

            }, 1800);

            return;

        }

        let i = 0;

        const text = lines[line];

        const timer = setInterval(() => {

            box.innerHTML += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(timer);

                box.innerHTML += "";

                line++;

                setTimeout(nextLine, 700);

            }

        }, 40);

    }

    nextLine();

}

function juduLeave() {

    const judu = document.getElementById("secretJudu");
    const dog = document.getElementById("secretJuduDog");
    const bubble = document.getElementById("secretBubble");

    // Hide speech bubble
    bubble.classList.remove("show");

    // Stop breathing animation
    dog.classList.remove("juduBreathing");

    // Running frames
    const runFrames = [
        "images/judu/run1.png",
        "images/judu/run2.png",
        "images/judu/run3.png",
        "images/judu/run4.png",
        "images/judu/run5.png"
    ];

    let frame = 0;

    const runAnimation = setInterval(() => {

        dog.src = runFrames[frame];

        frame = (frame + 1) % runFrames.length;

    }, 100);

    // Current position (where Judu stopped)
    let position = parseInt(dog.style.left) || 80;

    // Run completely out of the screen
    const exitPoint = window.innerWidth + 250;

    const move = setInterval(() => {

        position += 6;

        dog.style.left = position + "px";

        if (position >= exitPoint) {

            clearInterval(move);
            clearInterval(runAnimation);

            judu.style.display = "none";

            if (!introFinished) {

                introFinished = true;

                const heading = document.getElementById("secretHeading");
                const subHeading = document.getElementById("secretSubHeading");
                const quiz = document.getElementById("quizCard");

                heading.style.display = "block";
                subHeading.style.display = "block";
                quiz.style.display = "block";

                // Trigger CSS animation
                setTimeout(() => {
                    heading.classList.add("showSecret");
                    subHeading.classList.add("showSecret");
                    quiz.classList.add("showSecret");
                }, 50);

                showQuestion();

            }
            else {

                unlockFolder();

            }

        }

    }, 16);

}

function unlockFolder() {

    const container = document.getElementById("folderContainer");

    const folder = document.getElementById("folder");

    container.style.display = "flex";

    folder.classList.add("folderShake");

    setTimeout(() => {

        folder.classList.add("open");

    }, 700);

    setTimeout(() => {

        showSecretFile();

    }, 1800);

}

// ==========================================
// SHOW SECRET FILE
// ==========================================

function showSecretFile() {

    document.getElementById("folderContainer").style.display = "none";

    const file = document.getElementById("secretFile");

    file.style.display = "block";

    file.classList.add("fadeIn");

    document.getElementById("fileTitle").innerHTML =
        "📄 " + secretStory[currentQuestion].title;

    typeSecret();

}

// ==========================================
// TYPE SECRET
// ==========================================

function typeSecret() {

    const text = secretStory[currentQuestion].text;

    const box = document.getElementById("fileContent");

    box.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        box.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

            document.getElementById("nextSecret").style.display = "block";

            document.getElementById("nextSecret").classList.add("pulseButton");

        }

    }, 28);

}

// ==========================================
// NEXT SECRET
// ==========================================

document
    .getElementById("nextSecret")
    .addEventListener("click", nextSecret);

// ==========================================
// NEXT QUESTION
// ==========================================

function nextSecret() {

    document.getElementById("secretFile").style.display = "none";

    document.getElementById("nextSecret").style.display = "none";

    currentQuestion++;

    if (currentQuestion >= secretStory.length) {

        finishSecret();

        return;

    }

    document.getElementById("quizCard").style.display = "block";

    showQuestion();

}

// ==========================================
// FINISH
// ==========================================

function finishSecret() {

    const section =
        document.getElementById("secretSection");

    section.classList.add("fadeOut");

    setTimeout(() => {

        section.classList.remove("fadeOut");

        startProposal();
        topMusic();

    }, 1000);

}
