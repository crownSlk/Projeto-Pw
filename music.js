// Vai buscar os elementos do HTML
const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Botão PLAY
playBtn.addEventListener("click", () => {
    audio.play();
});

// Botão PAUSE
pauseBtn.addEventListener("click", () => {
    audio.pause();
});

// Botão ANTERIOR
prevBtn.addEventListener("click", () => {
    audio.currentTime = 0;
});

// Botão PRÓXIMA
nextBtn.addEventListener("click", () => {
    audio.currentTime += 10;
});