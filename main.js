let bu = document.getElementById("right");
let bl = document.getElementById("left");
let sld = document.getElementById("slider");
let bul = document.querySelectorAll(".bulls span");
let im = document.getElementById("image1");
let seconds = 8000;
let i = 0;
let b = 0;

var v = window.matchMedia("(max-width: 767px)");

function func() {
  if (v.matches == true) {
    i += 300;
    if (i == 900) {
      i = 0;
    }
  } else {
    i += 100;
    if (i == 300) {
      i = 0;
    }
  }
  sld.style.transform = null;
  sld.style.transform += `translateX(-${i}%)`;
  b == bul.length - 1 ? (b = 0) : b++;
  bul[b].classList.add("active");
  for (let a = 0; a < bul.length; a++) {
    if (a == b) {
      continue;
    }
    bul[a].classList.remove("active");
  }
}

var timer = setInterval(func, seconds);

bu.onclick = function () {
  i += 100;
  if (i == 300) {
    i = 0;
  }
  sld.style.transform = null;
  sld.style.transform += `translateX(-${i}%)`;
  b == bul.length - 1 ? (b = 0) : b++;
  bul[b].classList.add("active");
  for (let h = 0; h < bul.length; h++) {
    if (h == b) {
      continue;
    }
    bul[h].classList.remove("active");
  }
  clearInterval(timer);
  timer = setInterval(func, seconds);
};

bl.onclick = function () {
  i -= 100;
  if (i < 0) {
    i = 200;
  }
  sld.style.transform = null;
  sld.style.transform += `translateX(-${i}%)`;
  if (b == bul.length - 1) {
    b = bul.length - 1;
  }
  b--;
  if (b < 0) {
    b = bul.length - 1;
  }
  bul[b].classList.add("active");
  for (let e = 0; e < bul.length; e++) {
    if (e == b) {
      continue;
    }
    bul[e].classList.remove("active");
  }
  clearInterval(timer);
  timer = setInterval(func, seconds);
};

// 2

let tools = document.querySelectorAll(".row ul li");

for (let n = 0; n < tools.length; n++) {
  tools[n].onclick = function () {
    if (tools[n].classList.contains("active") == true) {
      tools[n].classList.remove("active");
    } else {
      tools[n].classList.add("active");
    }
    for (let m = 0; m < tools.length; m++) {
      if (n == m) {
        continue;
      }
      tools[m].classList.remove("active");
    }
  };
}
// 3

let butl = document.querySelectorAll(".bu");
let butr = document.querySelectorAll(".buri");
let pr = document.querySelectorAll(".products");
let tx = document.querySelectorAll(".info");
let c = 0;
let h = 0;
let z = 0;

butr[0].onclick = function () {
  if (c < pr.length * 310) {
    c += 310;
  }
  pr[0].style.transform = `translateX(-${c}px)`;
  tx[0].style.transform = `translateX(-${c}px)`;
};

butr[1].onclick = function () {
  if (h < pr.length * 310) {
    h += 310;
  }
  pr[1].style.transform = `translateX(-${h}px)`;
  tx[1].style.transform = `translateX(-${h}px)`;
};

butr[2].onclick = function () {
  if (z < pr.length * 310) {
    z += 310;
  }
  pr[2].style.transform = `translateX(-${z}px)`;
  tx[2].style.transform = `translateX(-${z}px)`;
};

butl[0].onclick = function () {
  if (c > 0) {
    c -= 310;
  }
  pr[0].style.transform = `translateX(-${c}px)`;
  tx[0].style.transform = `translateX(-${c}px)`;
};

butl[1].onclick = function () {
  if (h > 0) {
    h -= 310;
  }
  pr[1].style.transform = `translateX(-${h}px)`;
  tx[1].style.transform = `translateX(-${h}px)`;
};

butl[2].onclick = function () {
  if (z > 0) {
    z -= 310;
  }
  pr[2].style.transform = `translateX(-${z}px)`;
  tx[2].style.transform = `translateX(-${z}px)`;
};

//dark mode
let drk = document.getElementById("dark");
let light = document.getElementById("light");

light.onclick = function () {
  let current = document.documentElement.getAttribute("data-theme");

  if (current == "light") {
    drk.style.display = "none";
    light.style.display = "block";
  } else {
    drk.style.display = "block";
    light.style.display = "none";
  }
  document.documentElement.setAttribute(
    "data-theme",
    current == "light" ? "dark" : "light"
  );
};

drk.onclick = function () {
  let current = document.documentElement.getAttribute("data-theme");

  if (current == "light") {
    drk.style.display = "none";
    light.style.display = "block";
  } else {
    drk.style.display = "block";
    light.style.display = "none";
  }
  document.documentElement.setAttribute(
    "data-theme",
    current == "light" ? "dark" : "light"
  );
};
