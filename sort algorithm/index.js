let column = document.getElementsByClassName("col");
let number = document.getElementsByClassName("num");
let colsUl = document.querySelector(".cols");
let sort_name = document.querySelector(".name");
let timeContol;

function createLi(color) {
  let li = document.createElement("li");
  li.className = "col";
  return li;
}

function setPositionOfCol(i, h, color = "red") {
  let heigth = (h / 100) * 100;
  column[i].style.height = heigth + "%";
  column[i].style.backgroundColor = color;
}

function randomNumber() {
  let arr = [];
  let rowPosition = 0;
  for (let i = 0; i < 50; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    colsUl.appendChild(createLi());
    column[i].style.left = rowPosition + "px";
    rowPosition += 9.5;
    setPositionOfCol(i, arr[i]);
  }
  return arr;
}
// mke looping slow
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// swap function
async function swap(arr, a, b) {
  await sleep(x);
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

// mrege sort
async function mergeSort(arr, s, m, e) {
  let i = s,
    j = m + 1;
  let newArr = [];
  while (i <= m && j <= e) {
    await sleep(x);
    if (arr[i] < arr[j]) {
      newArr.push(arr[i]);
      setPositionOfCol(i, arr[i], "blue");
      i++;
    } else {
      newArr.push(arr[j]);
      setPositionOfCol(j, arr[j], "blue");
      j++;
    }
  }
  while (i <= m) {
    newArr.push(arr[i]);
    await sleep(x);
    setPositionOfCol(i, arr[i], "blue");
    i++;
  }
  while (j <= e) {
    newArr.push(arr[j]);
    await sleep(x);
    setPositionOfCol(j, arr[j], "blue");
    j++;
  }

  for (i = s; i <= e; i++) {
    await sleep(x);
    setPositionOfCol(i, arr[i], "black");
    arr[i] = newArr[i - s];
    await sleep(x);
    setPositionOfCol(i, arr[i], "green");
  }
}
async function dividArray(arr, s, e) {
  if (s < e) {
    let m = Math.floor((s + e) / 2);
    await dividArray(arr, s, m);
    await dividArray(arr, m + 1, e);
    await mergeSort(arr, s, m, e);
  }
}

// bobbly sort

async function bobblySort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      setPositionOfCol(j, arr[j], "blue");
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
        // let t=arr[j]
        // arr[j]=arr[j+1]
        // arr[j+1]=t
        // console.log("hello");
        // setPositionOfCol(i, arr[i],  "blue")
      }
      setPositionOfCol(j, arr[j], "green");
    }
  }
}

// seliction sort

async function selictionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    setPositionOfCol(i, arr[i], "black");
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        setPositionOfCol(j, arr[j], "blue");
        await swap(arr, i, j);
        setPositionOfCol(i, arr[i], "#343434");
      }
    }
    setPositionOfCol(i, arr[i], "green");
  }
}

let x = 50; //time
let myArr = randomNumber();
// sort_name.innerHTML="MREGE SORT"
dividArray(myArr, 0, myArr.length - 1);
// bobblySort(myArr);
// selictionSort(myArr);
