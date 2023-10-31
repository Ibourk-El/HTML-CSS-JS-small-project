let quetion = document.getElementById("q");
let li = document.querySelectorAll(".w");
let start_btn = document.getElementById("start");
let restart = document.getElementById("restart");
let ul = document.querySelector("ul");
let result = document.getElementById("result");

let obj = {
  1: {
    q: "gg dd djd djd kkd k sldldcp",
    w1: "hh",
    w2: "hh2",
    w3: "hh3",
    w4: "hh4",
    c: {
      i: 3,
      v: "hh4",
    },
  },
  2: {
    q: "mmmmmm gg dd djd djd kkd k sldldcp",
    w1: "hh",
    w2: "hh2",
    w3: "hh3",
    w4: "mm4",
    c: {
      i: 3,
      v: "mm4",
    },
  },
  3: {
    q: " kkkkkkk gg dd djd djd kkd k sldldcp",
    w1: "hh",
    w2: "hh2",
    w3: "kkk3",
    w4: "hh4",
    c: {
      i: 2,
      v: "kkk3",
    },
  },
  4: {
    q: " dd    dd   gg dd djd djd kkd k sldldcp",
    w1: "ttt",
    w2: "hh2",
    w3: "hh3",
    w4: "4",
    c: {
      i: 0,
      v: "ttt",
    },
  },
  5: {
    q: "END//",
  },
};
let len = Object.keys(obj).length;
console.log(len);
let index = 1;
let r = 0;

function setDataInLi() {
  quetion.innerText = obj[index].q;
  li[0].innerText = obj[index].w1;
  li[1].innerText = obj[index].w2;
  li[2].innerText = obj[index].w3;
  li[3].innerText = obj[index].w4;
}
start_btn.addEventListener("click", () => {
  if (index === len) {
    // check if quetions is ended
    ul.style.display = "none";
    result.innerHTML = `your correct insewrs is ${r}`;
    result.style.display = "block";
    restart.style.display = "block";
    start_btn.style.display = "none";
  } else {
    setDataInLi();
    ul.style.display = "block";
    start_btn.style.display = "none";
    li.forEach((el) => {
      if (el.classList.contains("right")) {
        el.classList.remove("right");
      }
      if (el.classList.contains("wrong")) {
        el.classList.remove("wrong");
      }
    });
  }
});

li.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.innerText === obj[index].c.v) {
      e.target.classList.add("right");
      r++;
    } else {
      e.target.classList.add("wrong");
      li[obj[index].c.i].classList.add("right");
    }
    start_btn.style.display = "block";
    start_btn.innerText = "Next";
    index += 1;
  });
});

restart.addEventListener("click", () => {
  index = 1;
  r=0
  setDataInLi();
  ul.style.display = "block";
  start_btn.style.display = "none";
  li.forEach((el) => {
    if (el.classList.contains("right")) {
      el.classList.remove("right");
    }
    if (el.classList.contains("wrong")) {
      el.classList.remove("wrong");
    }
  });
  restart.style.display = "none"
  result.style.display = "none";
});
