const checkbox = document.getElementById("menu__toggle");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});
