let upBtn = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY > 500) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
};

upBtn.onclick = function() {
  window.scrollTo({top: 0, behavior: "smooth"})
}
