let re = "https://www.omdbapi.com/?apikey=523e0f29&t=";

let img = document.getElementById("Poster");
let input = document.getElementById("text");
let btn = document.getElementById("btn");
let allP = document.querySelectorAll("p");

function getPs(id, v) {
  document.getElementById(id).innerText = v;
}

btn.addEventListener("click", () => {
  if (input.value !== "") {
    fun(input.value);
  }
});

async function fun(v) {
  const resp = await fetch(re + v);
  let data = await resp.json();

  for (let i = 0; i < allP.length; i++) {
    getPs(allP[i].id, data[allP[i].id]);
  }
  img.src = data.Poster;
}

btn.addEventListener("click",(e)=>{
  console.log(e)
})
