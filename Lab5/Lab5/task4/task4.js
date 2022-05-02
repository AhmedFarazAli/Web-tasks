document.querySelectorAll("span").forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    e.target.className = "hover";
  });
  element.addEventListener("mouseleave", (e) => {
    e.target.className = "";
  });
});