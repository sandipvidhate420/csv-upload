

let modalBtns = document.getElementById('create-project');
console.log('modalBtns: ', modalBtns);
modalBtns.onclick = function () {
    let modal = modalBtns.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
};

let closeBtns = document.querySelector(".close");
closeBtns.onclick = function () {
    let modal = closeBtns.closest(".modal");
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};




// let modalBtns1 = document.getElementById('create-issue-button');


// let modal1 = document.querySelector(".issue-modal");
// console.log('modal: ', modal1);
// console.log('modalBtns1: ', modalBtns1);
// modalBtns1.onclick = function () {
//     let modal2 = document.querySelector("#modalOne-issue");
//     modal2.style.display = "block";
// };


/*
let closeBtns = document.querySelector(".close");
console.log('closeBtns: ', closeBtns);
closeBtns.onclick = function () {
    let modal = closeBtns.closest(".modal");
    // modal.style.display = "none";
};
 */
// window.onclick = function (event) {
//     if (event.target.className === "modal") {
//         event.target.style.display = "none";
//     }
// };