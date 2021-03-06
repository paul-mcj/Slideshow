# How to Make a Slideshow (v1.0)

## About this project

### Why do it?

-   What originally interested me in this project was my need to learn how to incorporate a carousel of images into a larger website project I am working on. Being a beginner, I decided it was better to start smaller, so I took a basic example on building a slideshow (after doing some research) and modified it to make it my own. I did this entire project using HTML5, CSS3 and vanilla JavaScript; no frontend frameworks were used, so it all came down to me hard coding in VS Code.

### What does it do?

-   The project itself is very simple: it shows a functioning slideshow of movie posters (particularly Western movies), and has a red, white and black color theme to support this "gritty" genre, along with an aesthetically rustic font. Though straight-forward and condensed, this particular project took me a week to complete, working on it for a few hours every single day. However, just because of its simple nature does not mean it was easy to do. In fact, I used a wide array of different skills to complete this project, and I will outline them below by examining the three main files that make up this project, starting with the HTML file.

### The HTML

-   Nothing extremely significant lies in this small HTML file, though it’s necessary to set up the backbone of the project. It contains an uncomplicated layout including a header, subheader, main container for the images and divs for each of the images. Most important to take note of are the tags within the head of this file which allow it to interact with outside sources and set-up a responsive layout approach. For example, the meta tag that outlines the viewport content to have a device width and initial scale set was necessary to have a "mobile first" approach to this project, making sure that as the viewport changes so too can the contents of the page.

-   There are also links in the head which interact with the Google font API, which allows the rustic font to be used on the page. Additionally, this HTML file uses a script tag at the bottom of the body element, and sources an adjacent JavaScript file to perform dynamic actions on the webpage (which I will go into more detail about later).

### The CSS

-   Next up is the CSS file. It is the largest file of this project and I thought it needed a proper outline, so I included a numbered table of contents and correlated each item with a specific rule set/selector in the file for not only organizational purposes, but for more efficient navigation. Most of the CSS is straight-forward, and showcases my understanding of many common properties like font-size, margins, background-colors, etc. But it also shows a more in-depth understanding of CSS applications.

-   The inclusion of custom variables is apparent at the top of the file. Though not too many were initialized, they were used throughout the stylesheet when appropriate to help create more consistency for elements that needed to share exact property values. Pseudo classes and elements (such as :root and :hover) show up throughout the file as well. The inclusion of them is important, as I feel most web pages need to define global properties and have interactive elements (which are often styled via hovering effects).

-   The CSS also shows my understanding of positioning. Mostly when dealing with how elements are affected by their stacking context, the appropriate HTML elements are applied with relative positioning so that more interactive elements (for example, the chevrons) can be applied on top of them for user interactivity.

-   Since many types of screens are used in today's technological world, it seems only natural to accommodate all types from mobile to tablet to desktop. Because of this, not only are em units constant throughout this project for consistency and scalability but, so too are breakpoints. The change of certain selectors upon the sizing of the web page via media queries demonstrates the detailed awareness of page responsiveness.
-   Regarding syntax and code efficiency, the CSS file also tries to make use of the :is() pseudo class to put together several selectors that share a similar declaration. As such, the bottom of the page has a few rule sets that I have marked as “multiple element selectors”.

### The JavaScript

-   The final file in this project is the JavaScript file, which is linked via the script tag of the HTML file. The file immediately displays declarations of variables that are used throughout the project, mostly for query selection of HTML elements. The one key difference is the variable type differentiations: all query selector variables are of type “const”, as they never change in this entire project, whereas the variable that keeps track of the default slide potion is of type “let” as it needs to be re-assigned throughout.

-   The file includes a few basic functions, with the most important being the first one created which is used to determine the positioning logic of the images in the carousel (along with the respective place as a bullet below). This function uses basic conditionals and for loops to check for and re-assign values to HTML elements. Essentially, it shows a basic understanding of DOM manipulation, which is important regarding modern web development.

-   The final concept demonstrated in this file is the inclusion of a few event listeners. Much like the functions of this file the event listeners are primarily for DOM manipulation but, this time they are initiated via user interactivity, namely through clicking, hovering over objects, or hovering out of an object's range.

## Conclusions

-   To reiterate, this project seems small in scale but it demonstrates a lot of fundamental skills that I acquired for HTML5, CSS3 and vanilla JavaScript. Ranging from API implementation and page responsiveness all the way to JavaScript event listeners and DOM manipulation, this project uses a lot of interesting technologies.

## Future Additions

-   I am happy with the current state of this project, and I feel it accomplishes what I set out to do: create a basic slideshow. That being said, I know that there is always room for improvement. As I continue to learn more about web development, I am hopeful that this project can be updated to show the inclusion of newly acquired skills.

-   For instance, I would like to include some sort of project-wide variable that can organically track the number of images in the carousel, allowing for new images to be added easily. Currently there are only hardcoded values for the “onclick” attribute of all the bullets in the HTML class, which pre-determines the outcome when the function current() is parsed. I would like to update the project to make use of variables.

-   I would also like to incorporate some sort of player for the slideshow, making the images and corresponding bullets automatically cycle without user interaction. This is mainly for aesthetics, as I think it would be more interesting having the slideshow be active at all times and not simply staying still indefinitely when a user loads the page.

## Limitations

- I also acknowledge that the current state of the project is limited to browser support. I made this project using FireFox version 90 and realize that it has the possibility of  not working properly on other browsers. As I develop more skills, I would like to make sure that more projects of mine are supported on a larger array of browsers.

- I also know that on mobile there are some slight visual issues with the highlighting text and chevrons. I imagine that has to do with limited mobile pointers (as this project was made with having a computer mouse as the primary pointing device in mind). Over time, it would be nice to accomodate mobile touchscreens!

