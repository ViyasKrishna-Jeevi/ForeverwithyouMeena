// ==========================================
// PROPOSAL
// ==========================================
function playRingMusic() {

    const ringMusic =
    document.getElementById("bgMusic");


    ringMusic.volume = 0;

    ringMusic.play();


    let fade =
        setInterval(() => {

            if (ringMusic.volume < 0.8) {

                ringMusic.volume += 0.05;

            }
            else {

                clearInterval(fade);

            }


        }, 200);

}



// Stop ring music

function stopRingMusic() {

    let fade =
        setInterval(() => {


            if (ringMusic.volume > 0) {

                ringMusic.volume -= 0.05;

            }

            else {

                ringMusic.pause();

                clearInterval(fade);

            }


        }, 200);

}
const proposalDialogue = [

    "Woof... 🐶",

    "We've reached",

    "the final chapter.",

    "I've shown you",

    "every secret...",

    "Now...",

    "it's his turn."

];

const proposalLetter = `Dear Meena,

If someone had told me that one person could completely change my life, I probably wouldn't have believed them.

But then you came into my life...

You taught me what real happiness feels like.
You turned my ordinary world into something magical.
You became the reason behind my smiles,
the calm in my chaos,
and the home my heart never knew it was searching for.

Every memory with you has become a treasure.
Every laugh we shared is something I carry with me.

Even the little fights only reminded me
how much I never want to lose you.

When I close my eyes and imagine tomorrow,
I don't dream about success, money, or places.

I dream about you.

I dream about the little moments,
the silly laughs,
the quiet evenings,
and all the tomorrows we haven't lived yet.

So today...

On the most special day of your life,
I finally want to ask you
the question my heart has been waiting to ask
for so long...

❤️`;

let proposalStarted = false;
function startProposal() {

    showSection("proposalSection");

    const proposal =
        document.getElementById("proposalSection");

    proposal.classList.remove("show");

    setTimeout(() => {

        proposal.classList.add("show");

        createStars();

        introProposal();

    }, 100);

}
function introProposal() {

    const title =
        document.getElementById("proposalTitle");

    const sub =
        document.getElementById("proposalSubtitle");

    title.style.opacity = "1";

    setTimeout(() => {

        sub.style.opacity = "1";

    }, 800);

    setTimeout(() => {

        showProposalJudu();

    }, 2000);

}

function createStars() {

    const stars =
        document.getElementById("proposalStars");

    stars.innerHTML = "";

    for (let i = 0; i < 100; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        stars.appendChild(star);

    }

}

function showProposalJudu() {

    const judu =
        document.getElementById("proposalJudu");

    const dog =
        document.getElementById("proposalDog");

    judu.style.display = "block";

    dog.src = "images/judu/run1.png";

    dog.style.left = "-220px";

    const runFrames = [

        "images/judu/run1.png",
        "images/judu/run2.png",
        "images/judu/run3.png",
        "images/judu/run4.png",
        "images/judu/run5.png"

    ];

    let frame = 0;

    const animation = setInterval(() => {

        dog.src = runFrames[frame];

        frame = (frame + 1) % runFrames.length;

    }, 100);

    let x = -220;

    const move = setInterval(() => {

        x += 5;

        dog.style.left = x + "px";

        if (x >= 60) {

            clearInterval(move);

            clearInterval(animation);

            dog.src = "images/judu/sit.png";

            showProposalBubble();

        }

    }, 16);

}
function showProposalBubble() {

    const bubble =
        document.getElementById("proposalBubble");

    bubble.classList.add("show");

    typeProposalDialogue();

}
function typeProposalDialogue() {

    const box =
        document.getElementById("proposalBubbleText");

    box.innerHTML = "";

    let line = 0;

    function next() {

        if (line >= proposalDialogue.length) {

            setTimeout(() => {

                proposalJuduLeave();

            }, 2000);

            return;

        }

        let i = 0;

        const txt =
            proposalDialogue[line];

        const timer = setInterval(() => {

            box.innerHTML += txt.charAt(i);

            i++;

            if (i >= txt.length) {

                clearInterval(timer);

                box.innerHTML += "<br>";

                line++;

                setTimeout(next, 600);

            }

        }, 35);

    }

    next();

}
function proposalJuduLeave() {

    const bubble =
        document.getElementById("proposalBubble");

    const dog =
        document.getElementById("proposalDog");

    bubble.classList.remove("show");

    const runFrames = [

        "images/judu/run1.png",
        "images/judu/run2.png",
        "images/judu/run3.png",
        "images/judu/run4.png",
        "images/judu/run5.png"

    ];

    let frame = 0;

    const animation = setInterval(() => {

        dog.src = runFrames[frame];

        frame = (frame + 1) % runFrames.length;

    }, 100);

    let x = parseInt(dog.style.left);

    const move = setInterval(() => {

        x += 6;

        dog.style.left = x + "px";

        if (x > window.innerWidth + 200) {

            clearInterval(move);

            clearInterval(animation);

            document
                .getElementById("proposalJudu")
                .style.display = "none";

            showLetter();

        }

    }, 16);

}
function showLetter() {

    const letter =
        document.getElementById("proposalLetter");

    const tap =
        document.getElementById("proposalLetterTap");

    letter.style.display = "block";

    letter.style.opacity = "0";

    letter.style.transform =
        "translate(-50%, -50%) scale(.95)";

    tap.style.display = "none";

    setTimeout(() => {

        letter.style.transition =
            "opacity 1s ease, transform 1s ease";

        letter.style.opacity = "1";

        letter.style.transform =
            "translate(-50%, -50%) scale(1)";

        typeProposalLetter();

    }, 100);
}
function typeProposalLetter() {
    playRingMusic();

    const box =
        document.getElementById("proposalLetterText");

    const tap =
        document.getElementById("proposalLetterTap");

    box.innerHTML = "";

    tap.style.display = "none";

    let i = 0;

    // Slower and more emotional
    const typingSpeed = 45;

    const timer = setInterval(() => {

        box.innerHTML += proposalLetter.charAt(i);

        i++;

        if (i >= proposalLetter.length) {

            clearInterval(timer);

            // Wait a little after the final ❤️
            setTimeout(() => {

                tap.style.display = "block";

            }, 1200);

        }

    }, typingSpeed);

    
}

function continueToRing() {

    const letter =
        document.getElementById("proposalLetter");

    const tap =
        document.getElementById("proposalLetterTap");

    // Prevent another tap
    tap.style.pointerEvents = "none";

    // Fade letter away
    letter.style.transition =
        "opacity .8s ease, transform .8s ease";

    letter.style.opacity = "0";

    letter.style.transform =
        "translate(-50%, -50%) scale(.95)";

    setTimeout(() => {

        letter.style.display = "none";

        // Start ring scene
        showRing();

    }, 800);
}
document
    .getElementById("proposalLetterTap")
    .addEventListener("click", continueToRing);
function showRing() {

    const letter = document.getElementById("proposalLetter");

    letter.classList.add("fadeOut");

    setTimeout(() => {

        letter.style.display = "none";

        const ring = document.getElementById("ringContainer");

        ring.style.display = "block";
        ring.classList.add("fadeIn");

        // Reset ring
        const lid = document.getElementById("ringLid");
        const proposalRing = document.getElementById("proposalRing");

        lid.style.transition = "none";
        lid.style.transform = "rotateX(0deg)";

        proposalRing.style.transition = "none";
        proposalRing.style.opacity = "0";
        proposalRing.style.transform = "translateY(40px) scale(.7)";

        // Force browser repaint
        lid.offsetHeight;

        // Enable transition again
        lid.style.transition = "1s";
        proposalRing.style.transition = "1s";

    }, 700);

}

document
    .getElementById("ringBox")
    .addEventListener("click", openRingAnimation);
function bounceRing() {

    const box =
        document.getElementById("ringBox");

    box.animate([

        {
            transform: "translateY(-40px)"
        },

        {
            transform: "translateY(0px)"
        },

        {
            transform: "translateY(-18px)"
        },

        {
            transform: "translateY(0px)"
        }

    ], {

        duration: 1200

    });

}




// Start ring music


function openRingAnimation() {

    // Hide the tap hint immediately
    const hint = document.getElementById("ringHint");

    if (hint) {
        hint.style.opacity = "0";
        hint.style.pointerEvents = "none";

        setTimeout(() => {
            hint.style.display = "none";
        }, 300);
    }

    const lid = document.getElementById("ringLid");
    const ring = document.getElementById("proposalRing");

    // Open the lid
    lid.animate([
        { transform: "rotateX(0deg)" },
        { transform: "rotateX(40deg)" },
        { transform: "rotateX(160deg)" }
    ], {
        duration: 900,
        easing: "ease-out",
        fill: "forwards"
    });

    // Bring the ring out
    setTimeout(() => {

        ring.style.opacity = "1";

        ring.animate([
            {
                transform: "translateY(30px) scale(.2)",
                opacity: 0
            },
            {
                transform: "translateY(-15px) scale(1.3)",
                opacity: 1
            },
            {
                transform: "translateY(0px) scale(1)"
            }
        ], {
            duration: 900,
            easing: "ease-out",
            fill: "forwards"
        });

        createRingExplosion();

    }, 500);

    setTimeout(() => {

        showProposalQuestion();

    }, 2200);
}
function sparkleRing() {

    const ring =
        document.getElementById("ringContainer");

    for (let i = 0; i < 25; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
            Math.random() * 180 + "px";

        sparkle.style.top =
            Math.random() * 120 + "px";

        ring.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 900);

    }

}
// GOLD PARTICLES

function explodeGoldenParticles() {

    const container = document.getElementById("ringContainer");

    for (let i = 0; i < 120; i++) {

        const p = document.createElement("div");

        p.className = "goldParticle";

        p.style.left = "50%";
        p.style.top = "50%";

        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 250;

        p.style.setProperty("--x",
            Math.cos(angle) * distance + "px");

        p.style.setProperty("--y",
            Math.sin(angle) * distance + "px");

        container.appendChild(p);

        setTimeout(() => {
            p.remove();
        }, 2500);

    }

}

// SCREEN FLASH

function screenFlash() {

    const flash = document.createElement("div");

    flash.id = "screenFlash";

    document.body.appendChild(flash);

    setTimeout(() => {

        flash.remove();

    }, 700);

}

// FIREWORKS

function launchFireworks() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            createFirework(
                Math.random() * window.innerWidth,
                150 + Math.random() * 250
            );

        }, i * 250);

    }

}

function createFirework(x, y) {

    for (let i = 0; i < 45; i++) {

        const dot = document.createElement("div");

        dot.className = "fireworkDot";

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;
        const dist = 80 + Math.random() * 130;

        dot.style.setProperty("--x",
            Math.cos(angle) * dist + "px");

        dot.style.setProperty("--y",
            Math.sin(angle) * dist + "px");

        document.body.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 2200);

    }

}
function showProposalQuestion() {

    document.getElementById("proposalQuestionContainer")
        .style.display = "block";

    document.getElementById("proposalQuestionContainer")
        .classList.add("fadeIn");

}

document
    .getElementById("yesBtn")
    .addEventListener("click", yesClicked);

function yesClicked() {

    sparkleRing();
    explodeGoldenParticles();
    launchFireworks();
    screenFlash();
    explodeConfetti();


    document.getElementById("proposalQuestionContainer")
        .classList.add("fadeOut");

    setTimeout(() => {

        showForeverScreen();

    }, 3800);

}
function showForeverScreen() {

    const proposal =
        document.getElementById("proposalSection");

    proposal.innerHTML = `

    <div id="foreverScreen">

        <h1>❤️ SHE SAID YES ❤️</h1>

        <h2>Forever Begins Today</h2>

        <p>

        Every heartbeat...

        Every smile...

        Every tomorrow...

        belongs to us.

        </p>

        <button
        id="celebrateBtn">

            🎉 Let's Celebrate

        </button>

    </div>

    `;

    startFloatingHearts();

    setTimeout(() => {

        document
            .getElementById("celebrateBtn")
            .classList.add("show");

    }, 2500);


    document
        .getElementById("celebrateBtn")
        .onclick = startCake;

}
let floatingHeartsInterval = null;

function startFloatingHearts() {

    // Prevent multiple intervals
    if (floatingHeartsInterval) return;

    floatingHeartsInterval = setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "endingHeart";
        heart.textContent = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 500);
}


function stopFloatingHearts() {

    if (floatingHeartsInterval) {

        clearInterval(floatingHeartsInterval);

        floatingHeartsInterval = null;
    }

    document
        .querySelectorAll(".endingHeart")
        .forEach(el => el.remove());
}
function explodeHearts() {

    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement("div");

        heart.className = "blastHeart";

        heart.innerHTML = "❤️";

        heart.style.left = "50%";
        heart.style.top = "50%";

        const x = (Math.random() - 0.5) * 700;
        const y = (Math.random() - 0.5) * 700;

        heart.style.setProperty("--x", x + "px");
        heart.style.setProperty("--y", y + "px");

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}
function explodeConfetti() {

    for (let i = 0; i < 150; i++) {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = "50%";
        c.style.top = "50%";

        c.style.background = [
            "#ff4d94",
            "#FFD369",
            "#ffffff",
            "#6ee7ff",
            "#7CFC00",
            "#FF9800"
        ][Math.floor(Math.random() * 6)];

        c.style.setProperty("--x",
            (Math.random() - 0.5) * 900 + "px");

        c.style.setProperty("--y",
            (Math.random() - 0.5) * 900 + "px");

        document.body.appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 3000);

    }

}
const noBtn = document.getElementById("noBtn");

let noCount = 0;
function moveNoButton() {

    noCount++;

    const parent =
        document.getElementById("proposalButtons");

    const maxX =
        parent.offsetWidth - noBtn.offsetWidth;

    const x =
        Math.random() * maxX;

    const y =
        (Math.random() * 140) - 70;

    noBtn.style.position = "relative";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

    if (noCount >= 8) {

        noBtn.style.display = "none";

        showFunnyJudu();

    }

}
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", function (e) {

    e.preventDefault();

    moveNoButton();

});
function showFunnyJudu() {

    const bubble =
        document.getElementById("proposalBubble");

    const text =
        document.getElementById("proposalBubbleText");

    bubble.classList.add("show");

    text.innerHTML =
        "Woof 😂<br><br>Nice try...<br><br>The NO button has resigned.";

    setTimeout(() => {

        bubble.classList.remove("show");

    }, 3500);

}

let cakeStep = 0;

// ==========================================
// START CAKE SCENE
// ==========================================

function startCake() {
    stopFloatingHearts();

    showSection("cakeSection");
    createCakeStars();

    const cake = document.getElementById("cakeContainer");
    const judu = document.getElementById("cakeJudu");
    const bubble = document.getElementById("cakeBubble");

    // Hide everything first

    cake.classList.remove("cakeShow");

    judu.style.display = "none";

    bubble.classList.remove("show");

    // Beautiful fade in

    const section = document.getElementById("cakeSection");

    section.style.opacity = "0";

    setTimeout(() => {

        section.style.transition = "1.2s";

        section.style.opacity = "1";

    }, 100);

    // Movie pause

    setTimeout(() => {

        showCakeJudu();

    }, 1200);

}

function createCakeStars() {

    const stars = document.getElementById("cakeStars");

    stars.innerHTML = "";

    for (let i = 0; i < 140; i++) {

        const s = document.createElement("div");

        s.className = "star";

        s.style.left = Math.random() * 100 + "%";

        s.style.top = Math.random() * 100 + "%";

        s.style.animationDelay = Math.random() * 3 + "s";

        stars.appendChild(s);

    }

}

// ==========================================
// JUDU RUNS IN
// ==========================================

function showCakeJudu() {

    const judu = document.getElementById("cakeJudu");
    const dog = document.getElementById("cakeDog");

    judu.style.display = "block";

    dog.style.left = "-260px";

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

    let position = -260;

    const stopPoint = 70;

    const move = setInterval(() => {

        position += 5;

        dog.style.left = position + "px";

        if (position >= stopPoint) {

            clearInterval(move);
            clearInterval(runAnimation);

            dog.src = "images/judu/sit.png";

            dog.classList.add("juduBreathing");

            showCakeBubble();

        }

    }, 16);

}
// ==========================================
// SHOW CAKE BUBBLE
// ==========================================

function showCakeBubble() {

    console.log("showCakeBubble started");

    const bubble = document.getElementById("cakeBubble");
    const text = document.getElementById("cakeBubbleText");

    bubble.classList.add("show");
    text.innerHTML = "";

    const lines = [
        "Woof! 🐶",
        "Today is a very special day...",
        "Before we celebrate...",
        "Let's light the candles together! 🎂✨",
        "Tap on the cake...."
    ];

    let line = 0;

    function typeLine() {

        if (line >= lines.length) {

            console.log("Finished all lines");

            setTimeout(() => {

                bubble.classList.remove("show");

                console.log("Calling enableCakeTap()");

                showCakeReveal();

            }, 1800);

            return;
        }

        let char = 0;
        const current = lines[line];

        const timer = setInterval(() => {

            if (char < current.length) {

                text.innerHTML += current.charAt(char);
                char++;

            } else {

                clearInterval(timer);

                text.innerHTML += "<br>";

                line++;

                setTimeout(typeLine, 500);

            }

        }, 35);
    }

    typeLine();
}

function showCakeReveal() {

    const cake = document.getElementById("cakeContainer");

    cake.classList.add("cakeShow");

    enableCakeTap();

}
function createRingExplosion() {

    explodeConfetti();

    explodeHearts();

    sparkleRing();

    for (let i = 0; i < 80; i++) {

        const star = document.createElement("div");

        star.className = "sparkle";

        star.style.left = "50%";
        star.style.top = "45%";

        star.style.setProperty("--x", (Math.random() - 0.5) * 900 + "px");
        star.style.setProperty("--y", (Math.random() - 0.5) * 900 + "px");

        document.body.appendChild(star);

        star.animate([

            {
                transform: "translate(0,0) scale(.2)",
                opacity: 1
            },
            {
                transform: `translate(${(Math.random() - 0.5) * 900}px,
                ${(Math.random() - 0.5) * 900}px) scale(1.8)`,
                opacity: 0
            }

        ], {

            duration: 1600,
            easing: "ease-out"

        });

        setTimeout(() => {

            star.remove();

        }, 1600);

    }

}


// ==========================================
// ENABLE CAKE TAP
// ==========================================


function enableCakeTap() {

    const cake = document.getElementById("cakeContainer");

    cake.onclick = function () {

        console.log("First tap");
        console.log(cakeStep);

        if (cakeStep == 0) {

            cakeStep = 1;
            console.log("CakeStep changed to", cakeStep);

            lightCandles();
        }

    };

}

// ==========================================
// LIGHT CANDLES
// ==========================================

function lightCandles() {

    const cake = document.getElementById("birthdayCake");

    // Change image
    cake.src = "images/gift/cake_lit.png";

    // Magical glow
    cake.classList.add("cakeGlow");

    // Sparkles
    createCakeSparkles();

    // Little pop sound (optional)
    // playMagic();

    setTimeout(() => {

        startCakeJuduPart2();

    }, 900);

}
// ==========================================
// CAKE SPARKLES
// ==========================================

function createCakeSparkles() {

    const container = document.getElementById("cakeContainer");

    for (let i = 0; i < 70; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "cakeSparkle";

        sparkle.style.left = (35 + Math.random() * 30) + "%";
        sparkle.style.top = (20 + Math.random() * 45) + "%";

        sparkle.style.animationDelay =
            (Math.random() * 0.8) + "s";

        sparkle.style.animationDuration =
            (1 + Math.random()) + "s";

        container.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 2500);

    }

}
// ==========================================
// JUDU RETURNS
// ==========================================

function startCakeJuduPart2() {

    const judu = document.getElementById("cakeJudu");
    const dog = document.getElementById("cakeDog");

    const runFrames = [

        "images/judu/run1.png",
        "images/judu/run2.png",
        "images/judu/run3.png",
        "images/judu/run4.png",
        "images/judu/run5.png"

    ];

    judu.style.display = "block";

    dog.style.left = "-220px";

    let frame = 0;

    const runAnimation = setInterval(() => {

        dog.src = runFrames[frame];

        frame = (frame + 1) % runFrames.length;

    }, 100);

    let x = -220;

    const move = setInterval(() => {

        x += 5;

        dog.style.left = x + "px";

        if (x >= 50) {

            clearInterval(move);
            clearInterval(runAnimation);

            dog.src = "images/judu/sit.png";

            dog.classList.add("juduBreathing");

            showCakeWishBubble();

        }

    }, 16);

}
// ==========================================
// WISH BUBBLE
// ==========================================

function showCakeWishBubble() {

    const bubble = document.getElementById("cakeBubble");
    const text = document.getElementById("cakeBubbleText");

    bubble.classList.add("show");

    text.innerHTML = "";

    const message =

        `Woof! 🐶

Close your eyes...

Make a beautiful wish...

Then tap the cake

one more time. ❤️`;

    let i = 0;

    const timer = setInterval(() => {

        text.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {

            clearInterval(timer);

            enableBlowCake();

        }

    }, 35);

}
// ==========================================
// TAP AGAIN
// ==========================================

function enableBlowCake() {

    const cake = document.getElementById("birthdayCake");

    console.log("enableBlowCake called");

    cake.onclick = function () {

        console.log("Second tap");
        console.log("cakeStep =", cakeStep);

        if (cakeStep == 1) {

            console.log("Calling blowCandles");

            cakeStep = 2;

            blowCandles();

        }

    };

}
// ==========================================
// BLOW CANDLES
// ==========================================

function blowCandles() {

    const cake = document.getElementById("birthdayCake");
    const bubble = document.getElementById("cakeBubble");
    const dog = document.getElementById("cakeDog");

    bubble.classList.remove("show");

    dog.src = "images/judu/sit.png";

    cake.src = "images/gift/cake_unlit.png";
    cake.classList.remove("cakeGlow");

    explodeConfetti();
    explodeHearts();
    createCakeFireworks();
    createRibbons();
    createBalloons();

    setTimeout(() => {

        showJuduEnding();

    }, 2500);

}

function showJuduEnding() {

    const judu = document.getElementById("cakeJudu");
    const dog = document.getElementById("cakeDog");
    const bubble = document.getElementById("cakeBubble");
    const text = document.getElementById("cakeBubbleText");

    // Make sure Judu is visible
    judu.style.display = "block";
    judu.style.opacity = "1";

    // Stop any previous animation
    dog.classList.remove("juduBreathing");

    // Show happy/sitting image
    dog.src = "images/judu/sit.png";      // or happy.png if you have one
    dog.style.left = "50px";

    bubble.classList.add("show");
    text.innerHTML = "";

    const msg = `Woof! 🐶

I've protected
every surprise...

I've carried
every memory...

Now...

my mission
is complete.

Happy Birthday
Meena ❤️`;

    let i = 0;

    const timer = setInterval(() => {

        text.innerHTML += msg.charAt(i);

        i++;

        if (i >= msg.length) {

            clearInterval(timer);

            setTimeout(() => {

                juduLeaves();

            }, 3000);

        }

    }, 35);

}

function juduLeaves() {

    const dog = document.getElementById("cakeDog");
    const bubble = document.getElementById("cakeBubble");

    bubble.classList.remove("show");

    const runFrames = [

        "images/judu/run1.png",
        "images/judu/run2.png",
        "images/judu/run3.png",
        "images/judu/run4.png",
        "images/judu/run5.png"

    ];

    let frame = 0;

    const animation = setInterval(() => {

        dog.src = runFrames[frame];

        frame = (frame + 1) % runFrames.length;

    }, 100);

    let x = 50;

    const move = setInterval(() => {

        x += 6;

        dog.style.left = x + "px";

        if (x > window.innerWidth + 200) {

            clearInterval(move);
            clearInterval(animation);

            document.getElementById("cakeJudu").style.opacity = "0";

            setTimeout(() => {

                showBirthdayEnding();

            }, 800);

        }

    }, 16);

}
// ==========================================
// FIREWORKS
// ==========================================

function createCakeFireworks() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            createOneFirework();

        }, i * 450);

    }

}

function createOneFirework() {

    const colors = [

        "#FFD700",
        "#FF4D94",
        "#6EE7FF",
        "#FFFFFF",
        "#8B5CF6"

    ];

    const x = Math.random() * window.innerWidth;
    const y = 100 + Math.random() * 300;

    for (let i = 0; i < 45; i++) {

        const spark = document.createElement("div");

        spark.className = "firework";

        spark.style.left = x + "px";
        spark.style.top = y + "px";

        spark.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 120;

        spark.style.setProperty("--x",
            Math.cos(angle) * distance + "px");

        spark.style.setProperty("--y",
            Math.sin(angle) * distance + "px");

        document.body.appendChild(spark);

        setTimeout(() => {

            spark.remove();

        }, 1200);

    }

}
// ==========================================
// PARTY RIBBONS
// ==========================================

function createRibbons() {

    const colors = [

        "#FF4D94",
        "#FFD700",
        "#6EE7FF",
        "#FFFFFF",
        "#A855F7",
        "#FF914D"

    ];

    for (let i = 0; i < 120; i++) {

        const ribbon = document.createElement("div");

        ribbon.className = "ribbon";

        ribbon.style.left = Math.random() * 100 + "%";

        ribbon.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        ribbon.style.animationDelay =
            Math.random() * 0.5 + "s";

        ribbon.style.animationDuration =
            (3 + Math.random() * 2) + "s";

        ribbon.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(ribbon);

        setTimeout(() => {

            ribbon.remove();

        }, 6000);

    }

}
// ==========================================
// FLOATING BALLOONS
// ==========================================

function createBalloons() {

    const balloons = [

        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"

    ];

    for (let i = 0; i < 45; i++) {

        const balloon = document.createElement("div");

        balloon.className = "partyBalloon";

        balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.fontSize =
            (35 + Math.random() * 35) + "px";

        balloon.style.animationDelay =
            (Math.random() * 1.2) + "s";

        balloon.style.animationDuration =
            (6 + Math.random() * 3) + "s";

        document.body.appendChild(balloon);

        setTimeout(() => {

            balloon.remove();

        }, 9000);

    }

}
// ==========================================
// FINAL ENDING
// ==========================================

function showBirthdayEnding() {

    const section = document.getElementById("cakeSection");

    section.innerHTML = `

    <div id="birthdayEnding">

        <div id="endingStars"></div>

        <div id="cakeMoon"></div>

        <h1 id="birthdayTitle"></h1>

        <p id="birthdayMessage"></p>

        <div id="foreverLine">

        ❤️ Forever With You ❤️

        </div>
       <div id="endingOverlay">

    <img id="endingJudu"
         src="images/judu/sit.png">

    <div id="endingBubble">

        <div id="endingBubbleText"></div>

    </div>

</div>

        <div id="loveQuestion" class="hidden">

    <h2>❤️ One Last Question ❤️</h2>

    <p id="questionText">

        After everything we've been through...

        <br><br>

        Who am I to you?

        <br><br>

        Write whatever your heart wants to say...

    </p>

    <textarea
        id="loveAnswer"
        placeholder="Type from your heart... ❤️"
        maxlength="1000">
    </textarea>

    <br><br>

    <button onclick="saveLoveAnswer()">

        Send To Viyas ❤️

    </button>

</div>

    </div>

    `;

    createEndingStars();

    typeBirthdayTitle();

}
// ==========================================
// ENDING STARS
// ==========================================

function createEndingStars() {

    const stars =
        document.getElementById("endingStars");

    for (let i = 0; i < 120; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        stars.appendChild(star);

    }

}
// ==========================================
// TYPE TITLE
// ==========================================

function typeBirthdayTitle() {

    const title =
        document.getElementById("birthdayTitle");

    const txt =
        "🎂 Happy Birthday My Love ❤️";

    let i = 0;

    const timer = setInterval(() => {

        title.textContent += txt.charAt(i);

        i++;

        if (i >= txt.length) {

            clearInterval(timer);

            typeBirthdayMessage();

        }

    }, 80);

}
// ==========================================
// FINAL MESSAGE
// ==========================================

function typeBirthdayMessage() {

    const box =
        document.getElementById("birthdayMessage");

    const txt =
`Today wasn't about the cake...
or the surprises...
It was about seeing your smile.
Because... your smile
is my favourite place.
Happy Birthday,
My Beautiful Meena.
I Love You.`;

    let i = 0;

    box.textContent = "";

    const timer = setInterval(() => {

        box.textContent += txt.charAt(i);

        i++;

        if (i >= txt.length) {

            clearInterval(timer);

            setTimeout(() => {

                typeLoveQuestionBubble();

            }, 1800);

        }

    }, 65);
}

async function saveLoveAnswer() {

    const answer = document.getElementById("loveAnswer").value.trim();

    if (answer === "") {

        alert("Please write something from your heart ❤️");

        return;

    }

    try {

        // Save to Firebase
        await addDoc(
            collection(window.db, "LoveAnswers"),
            {
                answer: answer,
                createdAt: serverTimestamp(),
                sender: "Meena"
            }
        );

        // Optional local backup
        localStorage.setItem("meenaAnswer", answer);

        // Thank you screen
        document.getElementById("loveQuestion").innerHTML = `

            <div style="font-size:80px; margin-bottom:15px;">
                🥹❤️
            </div>

            <h2>Thank You, Meena ❤️</h2>

            <p class="finalThanks">

                Your words have safely reached my heart.

                <br><br>

                I can't wait to read every single word.

                <br><br>

                Until then...

                thank you for making this birthday

                even more special.

            </p>

            <div class="endingQuote">

                "Some people enter our lives
                and become memories...
                You became my forever."

                ❤️

            </div>

            <div class="endingSignature">

                Hold your hands till end..❤️

                <br>

                — Viyas

            </div>

        `;

    } catch (error) {

        console.error(error);

        alert("Couldn't send the message. Please try again.");

    }

}



function typeLoveQuestionBubble() {

    const overlay = document.getElementById("endingOverlay");
    const bubble = document.getElementById("endingBubble");
    const text = document.getElementById("endingBubbleText");

    overlay.classList.add("show");

    bubble.classList.add("show");

    text.innerHTML = "";

    const msg = `Woof! 🐶

Before I leave...

I have one last question...

Please answer honestly...

Viyas is waiting ❤️`;

    let i = 0;

    const timer = setInterval(() => {

        text.innerHTML += msg.charAt(i);

        i++;

        if (i >= msg.length) {

            clearInterval(timer);

            setTimeout(() => {

                bubble.classList.remove("show");

                setTimeout(() => {

                    overlay.classList.remove("show");

                    document
                        .getElementById("loveQuestion")
                        .classList.remove("hidden");
                    document.getElementById("birthdayTitle").style.opacity = ".2";

                    document.getElementById("birthdayMessage").style.opacity = ".15";

                    document.getElementById("endingCake").style.opacity = ".25";

                    document.getElementById("foreverLine").style.opacity = ".15";

                }, 500);

            }, 1800);

        }

    }, 35);

}
