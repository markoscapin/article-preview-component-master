var button = document.querySelector("button")
var navBarHidden = document.querySelector(".nav-social")


button.addEventListener("click", function() {
    if (navBarHidden.style.display === "flex") {
        navBarHidden.style.display = "none"; //On first click, the display is setted by CSS. We need to check if it is already flex and turn it to none or viceversa
    } else {
        navBarHidden.style.display = "flex";
    }
});