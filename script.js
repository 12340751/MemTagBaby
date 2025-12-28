const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const explosion = document.querySelector(".explosion");

playBtn.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();

    // перезапуск анимации
    explosion.classList.remove("explode");
    void explosion.offsetWidth; // ВАЖНО
    explosion.classList.add("explode");
});

muteBtn.addEventListener("click", () => {
    audio.pause();
});
