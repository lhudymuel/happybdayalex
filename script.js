const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");
const statusText = document.getElementById("statusText");
const openButton = document.getElementById("openButton");
const music = document.getElementById("birthdayMusic");


const messages = [
    "Initializing something special...",
    "Finding 5 years of memories...",
    "Checking friendship connection...",
    "Ignoring geographical distance...",
    "Preparing something from the heart...",
    "Almost ready...",
    "Surprise is ready ♡"
];


let progress = 0;


const loading = setInterval(() => {

    progress += 1;

    progressBar.style.width = progress + "%";

    percentage.textContent = progress + "%";


    const messageIndex = Math.min(
        Math.floor(progress / 15),
        messages.length - 1
    );


    statusText.textContent =
        messages[messageIndex];


    if (progress >= 100) {

        clearInterval(loading);


        openButton.disabled = false;

        openButton.textContent =
            "Open Your Surprise ♡";


        statusText.textContent =
            "Birthday.exe is ready.";

    }

}, 45);



/* =========================================
   OPEN SURPRISE + START MUSIC
========================================= */

openButton.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href =
            "happybirthdayalex.html?playMusic=true";

    }, 800);

});;