/*------------------------navBar-------------------------*/
let topnav = document.getElementById("hamburger").addEventListener("click", opNav);

let nav = document.getElementById("topnav");
let x = window.outerWidth;
function opNav() {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// window.addEventListener("resize", function () {
//     let x = window.outerWidth;
//     if (x > 800) {
//         nav.style.display = "flex";
//     }
//     else { nav.style.display = "none"; }
// })
