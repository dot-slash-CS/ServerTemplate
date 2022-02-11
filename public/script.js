/**
 * This is a client-side script, running in the browser and being
 * able to manipulate the DOM live.
 */

/**
 * There's a LOT of cool things you can do in browser-side JS
 * including a gigantic plethora of libraries for you to call
 * upon. For example, the following function changes the color
 * CSS styling of all elements from blue to red every half second.
 */
// Perform the given function every 500 ms
color = "blue";
setInterval(() => {
    // For every element in the body object, change its CSS style to the opposite of what it is now
    for (let elem of document.body.children) {
        if (elem.style.color == "blue") {
            elem.style.color = "red";
        } else {
            elem.style.color = "blue";
        }
    }
}, 500);

/**
 * The driver function does some cool stuff to the page
 * and should be run when the document and its elements
 * have been successfully loaded.
 * 
 * Functions in JS can be asynchronous, or act as "Promises."
 * A Javascript promise is an object that eventually resolves
 * to some response, and is helpful when working with web APIs
 * in which case you do not know how long it will take for the
 * given data to return to you (it depends on the speed of your
 * internet connection).
 * 
 * To make a request to a web API (Application Programming Interface,
 * a fancy name for a server) you use the Javascript keyword
 * "fetch" which takes a URL/path to fetch on and options to use when
 * fetching. The options may include the type of method (GET/POST) or
 * some data to send (often done through the body).
 */
async function driver() {
    // Send some data to the server
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"data": 1234})
    }
    let response = await (await fetch("send-data", options)).json();
    
    //Display the response by adding it to the page as a string in a paragraph element
    //A quick example of DOM manipulation to add elements to the page live.
    let newPar = document.createElement("p");
    newPar.textContent = JSON.stringify(response);
    document.body.append(newPar);
}

/**
 * On top of the amazing utility JS has with the graphic DOM
 * and the asynchronous API requests, you also have an integrated
 * event handling system!
 * 
 * A common event to listen for below is the document's (the HTML page's)
 * DOMContentLoaded event, which is fired when the static page,
 * (the elements described in the HTML file) are all loaded.
 * You can add a function to this event in case you want to configure
 * the DOM, as we do with the body here.
 */
document.addEventListener("DOMContentLoaded", driver);