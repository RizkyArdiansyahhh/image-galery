const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumb = document.querySelector(".thumb");
let active = null;

thumb.classList.add("active");
active = thumb;

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    if (active != null) {
      active.classList.remove("active");
    }
    jumbo.setAttribute("src", e.target.src);
    jumbo.classList.add("fade");
    e.target.classList.add("active");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    active = e.target;
  }
});
