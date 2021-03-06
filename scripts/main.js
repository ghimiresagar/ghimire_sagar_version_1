// variable to store the navigational id value in the page
let navigational_ids = [];
// variable to act as a pointer to which element is on the top of view port
let pointer;

// function to scroll into the id's view
function scrollInto(id) {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

function view_up() {
    // run a loop to find which element is on the bottom of the viewport
    // we need to run the loop in reversed order for this to work properly
    for(let i = navigational_ids.length-1; i >= 0; i--) {
        let element = document.getElementById(navigational_ids[i]);
        // get the elements view, returns values as an object
        let elementBound = element.getBoundingClientRect();
        if (
            elementBound.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            // the id is in the view port, we want the next element as the pointer
            // check if it's not the first element
            if (i != 0) {
                pointer = document.getElementById(navigational_ids[i-1]);
                // scroll into that element
                scrollInto(pointer.id);
            }
            // break out of the loop as we have our element on the top
            break;
        }
    }
}

// function is called when down arrow is pressed
function view_down() {
    // run a loop to find which element is on the top of the viewport
    for(let i = 0; i < navigational_ids.length; i++) {
        let element = document.getElementById(navigational_ids[i]);
        // get the elements view, returns values as an object
        let elementBound = element.getBoundingClientRect();
        if (
            elementBound.top >= 0 
        ) {
            // the id is in the view port, we want the next element as the pointer
            // check if it's not the last element
            if (i != 6) {
                pointer = document.getElementById(navigational_ids[i+1]);
                // scroll into that element
                scrollInto(pointer.id);
            }
            // break out of the loop as we have our element on the top
            break;
        }
    }
}

// function to run on load of the web page 
function runOnStart() {
    // get all the element's id that will be used for navigation
    let navigational_elements = document.getElementsByClassName("navigational_elements");
    // loop through the navigational elements to get their ids
    for (let i = 0; i < 7; i++) {
        navigational_ids.push(navigational_elements[i].id);
    }

    ///////////////////////////////////////////////////////////////
    // this is to preview the main image to the size of the window
    ///////////////////////////////////////////////////////////////
    // get the width and 
    let main_image = document.getElementById("main_image");

}