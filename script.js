// document.querySelector();

window.addEventListener("keydown", function (e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const elm = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(elm);
  if (!audio) return;
  elm.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
});

const key = document.querySelectorAll(".key");
key.forEach((value) => {
  value.addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  });
});
