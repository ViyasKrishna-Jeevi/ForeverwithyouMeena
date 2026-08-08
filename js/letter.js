// ==========================================
// LETTER
// ==========================================

const loveLetter = `Dear Meena ❤️,

    Happy Birthday, My Love.

    Today is the most beautiful day,

    because it's the day you came into

    this world.

    Thank you for filling my life

    with endless smiles, happiness,

    and unforgettable memories.

    You are my peace,

    my safe place,

    and my forever.

    I promise to stand beside you,

    to love you,

    and to cherish every moment with

    you.

    Happy Birthday, My Beautiful

    Meena.

    Forever Yours,

    ❤️`;

function startLetter(){

    showSection("letterSection");

}

document.getElementById("envelope").addEventListener("click",openLetter);

function openLetter(){

    document.getElementById("tapMessage").style.display="none";

    document.getElementById("envelope").classList.add("open");

    setTimeout(function(){

        document.getElementById("letterPaper").classList.add("show");

        typeLetter();

    },900);

}

function typeLetter(){

    const box=document.getElementById("letterText");

    box.innerHTML="";

    let index=0;

    const timer=setInterval(function(){

        box.innerHTML+=loveLetter.charAt(index);

        index++;

        if(index>=loveLetter.length){

            clearInterval(timer);

            document.getElementById("letterContinue").style.display="block";

        }

    },35);

}

document.getElementById("letterContinue").addEventListener("click",function(){

    startSecret();

});