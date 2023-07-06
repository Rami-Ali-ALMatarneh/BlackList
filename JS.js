let drop = document.querySelector("header .dropList");
let span = document.getElementsByClassName("Span");
let arraySpan = [span[0], span[1], span[2]];
let span1 = document.querySelector("header .center .Header h2 .span1");
let list = document.querySelector("header .center .Header .list");
drop.onclick = function () {
  arraySpan.forEach((element) => {
    element.classList.add("Span0");
  });
  arraySpan[0].classList.add("Span1");
  arraySpan[1].classList.add("Span2");
  arraySpan[2].classList.add("Span3");
  span1.classList.add("clear");
  list.classList.add("listView");
};

span1.onclick = function () {
  arraySpan.forEach((element) => {
    element.classList.remove("Span0");
  });
  arraySpan[0].classList.remove("Span1");
  arraySpan[1].classList.remove("Span2");
  arraySpan[2].classList.remove("Span3");
  span1.classList.remove("clear");
  list.classList.remove("listView");
};

let box1 = document.getElementById("BOX1");
let box2 = document.getElementById("BOX2");
let box3 = document.getElementById("BOX3");
let box4 = document.getElementById("BOX4");
let box5 = document.getElementById("BOX5");
let box6 = document.getElementById("BOX6");

console.log(box1.offsetTop);
console.log(window.scrollY);
window.onload = function () {
  window.onscroll = function () {
    if (window.scrollY >= box1.offsetTop - 50) {
      box1.style.opacity = "1";
    }
    if (window.scrollY >= box2.offsetTop - 50) {
      box2.style.opacity = "1";
    }
    if (window.scrollY >= box3.offsetTop - 50) {
      box3.style.opacity = "1";
    }
    if (window.scrollY >= box4.offsetTop - 50) {
      box4.style.opacity = "1";
    }
    if (window.scrollY >= box5.offsetTop - 50) {
      box5.style.opacity = "1";
    }
    if (window.scrollY >= box6.offsetTop - 50) {
      box6.style.opacity = "1";
    }
  };
  slider();
};
let arrayImage = [
  "images/B1.jpg",
  "images/B2.jpg",
  "images/B3.jpg",
  "images/B4.jpg",
];
var i = 0;
function slider() {
  document.getElementById("slide").src = arrayImage[i];
  if (i < arrayImage.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(slider, 2000);
}
let Button = document.getElementById("Button");
let form0 = document.getElementById("FORM0");
let form = document.getElementById("FORM");
let Button0 = document.getElementById("Button0");
Button.onclick = function () {
  form.style.left = "0";
  form0.style.right = "100%";
  Button.style.display = "none";
  Button0.style.display = "block";
};
Button0.onclick = function () {
  form.style.left = "100%";
  form0.style.right = "0%";
  Button.style.display = "block";
  Button0.style.display = "none";
};
