var button = document.querySelector("button")
var navBarHidden = document.querySelector(".nav-social")
button.addEventListener("click", function() {
    if (navBarHidden.style.display == "none") {
        navBarHidden.style.display = "flex";
    } else {
        navBarHidden.style.display = "none";
    }
});