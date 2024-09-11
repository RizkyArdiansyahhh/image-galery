const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
let active = null;

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    if (active != null) {
      active.classList.remove("active");
    }
    jumbo.setAttribute("src", e.target.src);
    jumbo.classList.add("fade");
  }
});
