const boards = document.querySelectorAll(".board");

boards.forEach((board) => {
  board.addEventListener("click", () => {
    removeActiveClasses();
    board.classList.add("active");
  });
});

function removeActiveClasses() {
  boards.forEach((board) => {
    board.classList.remove("active");
  });
}
