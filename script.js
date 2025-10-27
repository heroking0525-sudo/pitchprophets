let timer = 60;
const display = document.getElementById("countdown");

setInterval(() => {
  timer--;
  if (timer <= 0) timer = 60;
  display.textContent = timer;
}, 1000);
