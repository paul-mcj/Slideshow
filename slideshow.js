/*CSS Style for slideshow.html*/

/******************************************************************************
	Table of Contents
	-----------------

	1. Global Variables

	2. Global Functions
        2.1 -- function showSlides(index)
        2.2 -- function plusSlides(index)
        2.3 -- function current(index)

	3. Event Listeners
        3.1 -- mainContainer.addEventListener("click", (event))
        3.2 -- mainContainer.addEventListener("mouseover", (event))
        3.3 -- mainContainer.addEventListener("mouseout", (event))
        
	4. Calling Functions
        4.1 -- showSlides(thisSlide)

*******************************************************************************/

/******************************************************************************
1. Global Variables
******************************************************************************/
let thisSlide = 1; //Default slide position
const mainContainer = document.querySelector(".container");
const currentSlide = document.querySelectorAll(".slides");
const currentText = document.querySelectorAll(".text");
const prevChevron = document.querySelector(".prev");
const rightChevron = document.querySelector(".next");
const getBullets = document.querySelectorAll(".bullet");

/******************************************************************************
2. Global Functions
******************************************************************************/

// 2.1 This function provides the main logic for the slideshow. It will determine the position of the current image in the NodeList of images as well as its corresponding bullet beneath the container. It will dynamically manipulate the DOM to show only the current image (while hiding the others), as well as show what position is current in the sequence via the colored bullet below.
function showSlides(index) {
    if (index > currentSlide.length) {
        thisSlide = 1;
    }
    if (index < 1) {
        thisSlide = currentSlide.length;
    }
    //All slides are set to display of none to be hidden...
    for (position = 0; position < currentSlide.length; position++) {
        currentSlide[position].style.display = "none";
    }
    //...Except the current one.
    currentSlide[thisSlide - 1].style.display = "block";

    //If the tracking bullet is not active, its DOM class needs to be replaced to an empty string...
    for (position = 0; position < getBullets.length; position++) {
        getBullets[position].className = getBullets[position].className.replace(" active", "");
    }
    //...Otherwise, the current bullet gets appended with the (.active) class for styling via the CSS file.
    getBullets[thisSlide - 1].className += " active";
}

// 2.2 This function defines what happens when the chevrons are clicked. In the .html file, the (.prev) chevron sets index = -1, and sets index = 1 for the (.next) selector to manipulate the cycling of the slideshow.
function plusSlides(index) {
    showSlides((thisSlide += index));
}

//2.3 This function determines what the active bullet is. Each child of the (.tracker) class of the .html file has its own hardcoded index to parse into this function.
function current(index) {
    showSlides((thisSlide = index));
}

/******************************************************************************
3. Event Listeners
******************************************************************************/

// 3.1 This is a stylistic choice to have an orange color flash on the (.container) when a user cycles the slideshow. It is initialized the first time a click occurs anywhere in the (.container) element, and this persists until a new session is created.
mainContainer.addEventListener("click", (event) => {
    mainContainer.style.background = "orange";
});

// 3.2 This event listener changes the display and transition properties of (.text), (.prev) and (.next) selectors when a user hovers over the (.container).
mainContainer.addEventListener("mouseover", (event) => {
    for (position = 0; position < currentSlide.length; position++) {
        currentText[position].style.display = "block";
        currentText[position].style.transition = "1s";
    }
    prevChevron.style.display = "block";
    prevChevron.style.transition = "1s";
    rightChevron.style.display = "block";
    rightChevron.style.transition = "1s";
});

// 3.3 This event listener functions similarity to the above one, only that it applies when a user hovers out of the (.container) selector's range.
mainContainer.addEventListener("mouseout", (event) => {
    for (position = 0; position < currentSlide.length; position++) {
        currentText[position].style.display = "none";
    }
    prevChevron.style.display = "none";
    rightChevron.style.display = "none";
});

/******************************************************************************
4. Calling Functions
******************************************************************************/

// 4.1 By default the .html document parses the paramter "thisSlide" into the function showSlides(). This is necessary to have the first image in the NodeList shown when the page loads; more precisely, the image at NodeList[0] is to be shown.
showSlides(thisSlide);
