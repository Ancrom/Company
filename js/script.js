const play = document.querySelector(".video__button");
const video = document.querySelector(".video video");

play.addEventListener("click", () => {
  video.play();
  video.setAttribute("controls", "controls");
  play.classList.add("video__button--active");
});
