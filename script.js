let burgerMenu = document.getElementById("burger__navigation");

burgerMenu.onclick = function () {
  addMenu();
};

function addMenu() {
  console.log("click");
  document.querySelector(".navigation").classList.toggle("show");
}
