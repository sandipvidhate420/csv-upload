let modalBtns = document.getElementById('create-issue-button');
let modal = document.querySelector(".issue-modal");
modalBtns.onclick = function () {
    let modal = document.querySelector("#modalOne-issue");
    modal.style.display = "block";
};

let closeBtns = document.querySelector(".close");
console.log('closeBtns: ', closeBtns);
closeBtns.onclick = function () {
    let modal = closeBtns.closest(".issue-modal");
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target.className === "issue-modal") {
        event.target.style.display = "none";
    }
};


//add filter
let addFilter = document.getElementById('add-filter');
let modal1 = document.querySelector(".issue-modal");
addFilter.onclick = function () {
    let modal1 = document.querySelector("#show-filter");
    modal1.style.display = "block";
};

let closeBtns1 = document.querySelector(".close");
console.log('closeBtns: ', closeBtns1);
closeBtns.onclick = function () {
    let modal = closeBtns.closest(".issue-modal");
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target.className === "issue-modal") {
        event.target.style.display = "none";
    }
};