

// FIRST BUTTON AND MENU FUNCTIONS ----------------------------------

// declare constants for the first menu's toggling open and closed
const menu1 = document.getElementById("menu1"); //get the first menu via its id
const btn1 = document.getElementById("btn1"); //get the first button via its id

// define togglemenu1 function (show / hide #menu1)
// (triggered via inline onclick attribute in HTML/ <button> element)
function toggleMenu1() {
    if (menu1.className == "closed") {
        menu1.className = "opened";
    } else {
        menu1.className = "closed";
    }
}
// description: If #menu1 has a classname of .closed; set it to .opened. And otherwise, set it to .closed
// .closed and .open are classnames that have a CSS property of 'display:none;' and 'display:block;' respectively
// #menu1 is set to class .closed by default in HTML




// SECOND BUTTON AND MENU FUNCTIONS ---------------------------------

// declare constants for the second menu's toggling open and closed
const menu2 = document.getElementById("menu2"); //get the second menu 
const btn2 = document.getElementById("btn2"); //get the second button 
const body = document.querySelector("body"); //get the body element

// define togglemenu2 function (show / hide #menu2)
function toggleMenu2() {
    if (menu2.className == "closed") {
        menu2.className = "opened";
      } 
    else {
        menu2.className = "closed";
    }
}


// add a listener for certain events on the second <button> and <body> ...
// on 'event' (e.g. 'click', or 'load') trigger the 'togglemenu2' function:
btn2.addEventListener("click", toggleMenu2);
body.addEventListener("load", toggleMenu2());




// CLOSE MENU FUNCTIONS ---------------------------------------------

// declare constants for the closemenu function
const closeMenus = document.getElementsByClassName("closemenu"); // creates an array with a list of all items with the classname .closemenu

var n; //random integer variable n is declared

// The FOR LOOP declaration: starting n at 0, keeping it within the length of the .closemenu array, n++, i.e. increment by 1. So it loops over the array items;  arrayitem[0], arrayitem[1], arrayitem[2], ...arrayitem[n].    
for (n = 0; n < closeMenus.length; n++) { 

    //add a click event listener to all .cloemenu elements
    closeMenus[n].addEventListener("click", function() {
        this.parentElement.className = "closed";  
    });
}

var i; //random integer variable i is declared
  
for (i = 0; i < closeMenus.length; i++) { 

    //add a click event listener to all .closemenu elements
    closeMenus[i].addEventListener("click", function() {
        this.parentElement.className = "closed";
    });
}



/* 
// Add target="_blank" to all anchor <a> tags

var links = document.querySelectorAll("a");
var i;
for (i = 0; i < links.length; i++) {
  links[i].setAttribute("target", "_blank");
}
*/





