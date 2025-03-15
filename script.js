const confessions = [
    "I bought winrar",
    "I peed in my sister's closet",
    "I've played fortnite",
    "I like asmongold",
    "skibidi toilet",
    "I like epicgames launcher more than steam",
    "I use youtube shorts",
    "I sometimes like to kidnapp random people and make them watch the worst content on youtube",
    "I don't like minecraft",
    "I watch pay gorn",
    "I love Adam",
    "I do tiktok trends"
];

let currentIndex = 0;

function updateConfession() {
    document.getElementById("confession").innerText = confessions[currentIndex];
}

function nextConfession() {
    currentIndex = (currentIndex + 1) % confessions.length;
    updateConfession();
}

function previousConfession() {
    currentIndex = (currentIndex - 1 + confessions.length) % confessions.length;
    updateConfession();
}

window.onload = updateConfession;