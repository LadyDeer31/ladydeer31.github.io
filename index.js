const container = document.getElementById("confetti-container");

const colors = [
  "#ff0000",
  "#ff7f00",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#8b00ff",
];

document.addEventListener("click", (event) => {
  createConfetti(event.clientX, event.clientY);
});

function createConfetti(x, y) {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("span");

    confetti.classList.add("confetti");

    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;

    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.setProperty("--x", `${Math.random() * 500 - 250}px`);
    confetti.style.setProperty("--y", `${Math.random() * 500 - 150}px`);
    confetti.style.setProperty("--r", `${Math.random() * 720 - 360}deg`);

    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 1400);
  }
}
