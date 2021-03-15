/**
 * Append vs. prepend vs. appendChild
 * 
 * Ref. prepend: 
 * https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
 * 
 * Ref. append:
 * https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append 
 * 
 * Ref. difference between append() and appendChild():
 * https://dev.to/ibn_abubakre/append-vs-appendchild-a4m 
 */

// Create new element
const newEl = document.createElement('li');
newEl.textContent = 'new';

// DOM query the ul
const list = document.querySelector('.list');

// See difference on firstChild and firstChildElement
console.log(list.firstChild);
console.log(list.firstElementChild);


// append() vs. prepend() vs. appendChild()
//list.append(newEl);       // append() inserts new li as last child in list
//list.prepend(newEl);      // prepend() inserts new li as first child in list
//list.appendChild(newEl);  // appendChild only accepts a node object
//list.append('hej');       // append also accepts node objects AND DOM string 


/**
 * Other metohds to insert elements:
 * - replaceChild
 * - insertBefore
 * - insertAdjacentElement - very powerful
 */


/**
 * Follow-me examples - Events:
 * 1: Add class .active on button when it is clicked.
 * 2: Get the current x and y positions from cursor in browser window.
 * 3: Add class .blue to container when mouse enters container and 
 *    remove class .blue then mouse leaves container (like a hover).
 */

// DOM query: container, button, posX, posY

// Log when the button is clicked in the console.

// Update the x and y displays to show the current mouse position.



// Change the color of the box when the mouse enters.