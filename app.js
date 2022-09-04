const videoContainer = window.document.querySelector(".video-container");

const switchBtn = window.document.querySelector(".switch-btn");

const preloader = window.document.querySelector(".preloader");

switchBtn.addEventListener("click", function () {
  console.log("my name is yash");
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    videoContainer.pause();
  } else {
    switchBtn.classList.remove("slide");
    videoContainer.play();
  }
});

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
