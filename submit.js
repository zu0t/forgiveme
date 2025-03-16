function HolyClick() {
    let audio = new Audio('holy.mp3');
    audio.play();

    let form = document.getElementById("confForm");
    let messageBox = document.getElementById("returnMessage");

    form.classList.add("fade-out");

    setTimeout(() => {
        form.style.display = "none";
        messageBox.innerHTML = "<p>Your sin has been cleared</p>";
        messageBox.style.display = "block";

        setTimeout(() => {
            messageBox.classList.add("fade-in");
        }, 10);

        setTimeout(() => {
            window.location.href = "index.html";
        }, 5000);
    }, 1000);
}
//you dont see this ok 🙏
document.addEventListener("DOMContentLoaded", function () {
    const codeBox = document.getElementById("codeBox");
    const logo = document.getElementById("confessLogo"); 

    function playSound(soundFile) {
        let audio = new Audio(soundFile);
        audio.play();
    }

    if (logo) {
        logo.addEventListener("click", function () {
            playSound('key.oga');
            codeBox.style.display = "block";
        });
    }
});
