
function showMenu() {
  const menu = document.getElementById("menu");
  const box = document.getElementById("box-profile");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    box.style.paddingTop = "0px";
  } else {
    menu.style.display = "block";
    box.style.paddingTop = "125px";
  }
}