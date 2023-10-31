let create_not_btn = document.getElementById("create-btn");
let input_box = document.getElementById("write-txt-box");
create_not_btn.addEventListener("click", () => {
  input_box.style.height = "fit-content";
});

// ###################

let input_title = document.getElementById("title");
let input_txt = document.getElementById("txt-body");
let save_btn = document.getElementById("save");
let ul = document.getElementById("ul");
// ######
save_btn.addEventListener("click", () => {
  input_box.style.height = "0px";
  if (forEdit) {
    localStorage.removeItem(oldTitle);
    let obj = {
      title: input_title.value,
      body: input_txt.value,
    };
    localStorage.setItem(input_title.value, JSON.stringify(obj));
    ul.appendChild(createElementLi(input_title.value, input_txt.value));
    forEdit = false;
  } else {
    if (input_txt.value !== "") {
      if (input_title.value === "") {
        let i = 1;
        while (localStorage.getItem(`New Note${i}`) !== null) {
          i++;
        }
        input_title.value = `New Note${i}`;
      }
      let obj = {
        title: input_title.value,
        body: input_txt.value,
      };
      localStorage.setItem(input_title.value, JSON.stringify(obj));
      ul.appendChild(createElementLi(input_title.value, input_txt.value));
    }
  }

  input_txt.value = "";
  input_title.value = "";
});

// ################

// ############## get data in local storage
if (localStorage.length !== 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(obj);
    ul.appendChild(createElementLi(obj.title, obj.body));
  }
}

// var for edit event
let oldTitle = "";
let oldBody = "";
let forEdit = false;

// ###############

function createElementLi(title_v, body_v) {
  let li = document.createElement("li");
  // ###############
  let div_title_btns = document.createElement("div");
  div_title_btns.className = "title-btns";
  // ################
  let title_note = document.createElement("h4");
  title_note.className = "title-note";
  title_note.innerText = title_v;
  // ##############
  let div_btns = document.createElement("div");
  div_btns.className = "btns";
  // ##############
  let open_btn = document.createElement("button");
  open_btn.className = "open";
  open_btn.innerHTML = `<i class="fa-solid fa-book-open"></i>`;
  // ##############
  let edit_btn = document.createElement("button");
  edit_btn.className = "edit";
  edit_btn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  // ##############
  let remove_btn = document.createElement("button");
  remove_btn.className = "remove";
  remove_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  // ############## append div_btns
  div_btns.appendChild(open_btn);
  div_btns.appendChild(edit_btn);
  div_btns.appendChild(remove_btn);
  // ############## append to div_title_btns
  div_title_btns.appendChild(title_note);
  div_title_btns.appendChild(div_btns);
  // ##############
  let p = document.createElement("p");
  p.className = "body";
  p.innerText = body_v;
  // ############## append to li
  li.appendChild(div_title_btns);
  li.appendChild(p);
  // ############ some logic code
  remove_btn.addEventListener("click", () => {
    li.remove();
    localStorage.removeItem(title_note.innerText);
  });
  // ##########
  open_btn.addEventListener("click", () => {
    p.classList.toggle("active");
  });
  // ############
  edit_btn.addEventListener("click", () => {
    input_box.style.height = "fit-content";
    input_title.value = title_note.innerText;
    input_txt.value = p.innerText;
    oldBody = p.innerText;
    oldTitle = title_note.innerText;
    forEdit = true;
    li.remove();
  });
  // ############
  return li;
}
