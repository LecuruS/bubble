const counterDisplay = document.querySelector("h3");
let counter = 0;
console.log(counterDisplay);

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  //   console.log(Math.random()); //Donne un nombre random entre 0 et 1

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    bubble.remove();

    counter++;
    counterDisplay.textContent = counter;
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);
