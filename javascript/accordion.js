let accodions = document.querySelectorAll(".accordion")

// accodions[0].style.display = "none" //test

for (let i = 0; i < accodions.length; i++) {
    // console.count() test
    accodions[i].addEventListener("click", function () {
        //add another class
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block"
        }
    })
}