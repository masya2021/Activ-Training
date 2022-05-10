let burgerMenu = document.getElementById("burger__navigation");

burgerMenu.onclick = function () {
  addMenu();
};

function addMenu() {
  document.querySelector(".navigation").classList.toggle("show");

  // burgerMenu.remove("show");
}
