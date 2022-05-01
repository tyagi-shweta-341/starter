const icon = document.getElementsByClassName("icon");
const item = document.getElementsByClassName("item");

console.log(icon.length);

for (let i = 0; i < icon.length; i++)
  icon[i].addEventListener("click", function () {
    item[i].classList.toggle("open");
  });
