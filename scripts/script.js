const burger = document.getElementById("burger");
const navigation = document.getElementById("navigation");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navigation.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    burger.classList.remove("open");
    navigation.classList.remove("open");
  }
});
