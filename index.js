const data = ["Banu", "Zamiq", "Ahu", "Yusif"];

// console.log(data.sort());

var list = document.getElementsByClassName("list")[0];
var change = document.getElementsByClassName("change")[0];
var section = document.getElementsByClassName("section")[0];
var connect = document.getElementsByClassName("connect")[0];
var joinMethod = document.getElementsByClassName("join-method")[0];

data.forEach((element) => {
    change.innerHTML += `
    <div class="alert alert-danger" role="alert">
    ${element}
   </div>
    `
})


//* SORT
list.addEventListener("click", () => {
    change.innerHTML = "";
    data.sort().forEach((element) => {
        change.innerHTML += `
        <div class="alert alert-danger" role="alert">
        ${element}
       </div>
        `
    })
})


//* SLICE
section.addEventListener("click", () => {
    change.innerHTML = "";
    data.slice(1, 3).forEach((element) => {
        change.innerHTML += `
        <div class="alert alert-danger" role="alert">
        ${element}
       </div>
        `
    })
})


//* CONCAT
const parts = ["Elvin", "Aysel", "Fərid", "Səbinə"];

connect.addEventListener("click", () => {
    change.innerHTML = "";
    parts.concat(data).forEach((element) => {
        change.innerHTML += `
        <div class="alert alert-danger" role="alert">
        ${element}
       </div>
        `
    })
})


//* JOİN
const parts1 = ["Elvin", "Aysel", "Fərid", "Səbinə"];

joinMethod.addEventListener("click", () => {
    change.innerHTML = "";
    change.innerHTML = parts1.concat(data).join("😊")
    parts1.concat(data).forEach((element) => {
        change.innerHTML += `
        <div class="alert alert-danger" role="alert">
        ${element}
       </div>
        `
    })
})