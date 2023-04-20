const text = document.getElementById("text");
const textContent = "🌱 | Bretagne-RP";
let currentIndex = 0;

function typeText() {
  text.textContent += textContent[currentIndex];
  currentIndex++;
  if (currentIndex >= textContent.length) {
    clearInterval(timer);
  }
}

let timer = setInterval(typeText, 500);