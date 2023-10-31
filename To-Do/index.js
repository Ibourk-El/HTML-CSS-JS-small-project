let text = document.querySelector("#input-text");
let add_btn = document.querySelector("#add-btn");
let list = document.querySelector("#list");

function createToDoElement(value, check = false) {
  let li = document.createElement("li");
  li.addEventListener("mouseover", () => {
    li.style.cursor = "pointer";
  });

  let input = document.createElement("input");
  input.type = "checkbox";
  input.className = "check";
  input.name = "checkbox";
  input.checked = check;
  input.addEventListener("click", () => {
    if (input.checked) {
      create_p.classList.add("active");
      create_p.style.color = "gray";
    } else {
      create_p.classList.remove("active");
    }
    let ob = JSON.parse(localStorage.getItem(value));
    ob.check = input.checked;
    localStorage.setItem(value, JSON.stringify(ob));
  });

  let create_p = document.createElement("p");
  create_p.innerHTML = value;
  create_p.addEventListener("click", () => {
    if (create_p.classList.contains("active")) {
      create_p.classList.remove("active");
      input.checked = false;
    } else {
      create_p.classList.add("active");
      create_p.style.color = "gray";
      input.checked = true;
      input.style.backgroundColor = "skyblue";
    }
    let ob = JSON.parse(localStorage.getItem(value));
    ob.check = input.checked;
    localStorage.setItem(value, JSON.stringify(ob));
  });

  let remove_btn = document.createElement("button");
  remove_btn.className = "remove";
  remove_btn.innerHTML = "x";

  remove_btn.addEventListener("click", () => {
    localStorage.removeItem(create_p.innerText);
    li.remove();
  });

  if (input.checked) {
    create_p.classList.add("active");
  }
  let obj = {
    v: value,
    check: input.checked,
  };
  localStorage.setItem(value, JSON.stringify(obj));
  li.appendChild(input);
  li.appendChild(create_p);
  li.appendChild(remove_btn);
  return li;
}

if (localStorage.length !== 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let ob = JSON.parse(localStorage.getItem(localStorage.key(i)));
    list.appendChild(createToDoElement(ob.v, ob.check));
  }
}

let i = 0;

add_btn.addEventListener("click", () => {
  if (text.value !== "") {
    list.appendChild(createToDoElement(text.value));
    text.value = "";
  }
});
