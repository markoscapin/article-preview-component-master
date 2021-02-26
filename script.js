var button = document.querySelector("button");
var navBarHidden = document.querySelector(".nav-social");
var jsButtonBox = document.querySelector(".js-share-button");
var profileBox = document.querySelector(".profile-box");
var shareSvg = document.querySelector(".share img");




//To match if the @media query is on a specific width setted on CSS, we need to use matchMedia(query) and use the attribute .matches which is a boolean -> result will always be true or false

var media = window.matchMedia("(max-width:900px)")

//now if it matches it should do something different depending on the mobile / desktop version 

//We will add an event listener for the button and depending on media it will do 2 different things
button.addEventListener("click", function() {
    if (media.matches) {
        //On first click, the display is setted by CSS. We need to check if it is already flex and turn it to none or viceversa

        //In case is matched (-> mobile version) than set multiple different display values for many classes
        if (navBarHidden.style.display === "flex") {
            navBarHidden.style.display = "none";
            jsButtonBox.classList.remove("background-hidden");
            jsButtonBox.style.display = "block";
            jsButtonBox.style.width= "auto";
            profileBox.style.display= "flex"; 
            shareSvg.style.filter = "none";
            button.style.backgroundColor = "";
            


        } else {
            navBarHidden.style.display = "flex";
            jsButtonBox.classList.add("background-hidden");
            profileBox.style.display = "none";
            jsButtonBox.style.display = "flex";
            jsButtonBox.style.width = "100%";
            // button.style.filter = "invert(31%) sepia(15%) saturate(583%) hue-rotate(177deg) brightness(94%) contrast(83%);"
            button.style.backgroundColor = "hsla(214, 17%, 65%, 0.8)";
            shareSvg.style.filter = "brightness(5)";


        }
    } else {
        //in case is not matched (-> desktop mode) than set a different display value
        if (navBarHidden.style.display === "flex") {
            navBarHidden.style.display = "none"; //On first click, the display is setted by CSS. We need to check if it is already flex and turn it to none or viceversa
        } else {
            navBarHidden.style.display = "flex";
        }
    }

    
});

