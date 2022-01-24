let alert = document.querySelector(".alert");
let simple = document.querySelector(".simple");
let conformation = document.querySelector(".conformation");

function show(value) {
  if (value == "alert") {
    alert.classList.toggle("hidden");
    simple.classList.add("hidden");
    conformation.classList.add("hidden");
  } else if (value == "simple") {
    simple.classList.toggle("hidden");
    alert.classList.add("hidden");
    conformation.classList.add("hidden");
  } else {
    conformation.classList.toggle("hidden");
    simple.classList.add("hidden");
    alert.classList.add("hidden");
  }
  setTimeout(() => {
    simple.classList.add("hidden");
    alert.classList.add("hidden");
    conformation.classList.add("hidden");
  }, 4000);
}
