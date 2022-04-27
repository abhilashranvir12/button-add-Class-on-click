const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", updateActiveFilter);
});

function updateActiveFilter(event) {
  const activeButton = document.querySelector(".active");
  activeButton.classList.remove("active");
  //   buttons.forEach((btn) => btn.classList.remove("active"));

  event.target.classList.add("active");
}
