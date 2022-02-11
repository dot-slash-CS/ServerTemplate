/** The App.js File
 * Contains all you need to start and run your server!
 * 
 * @author Pirjot Atwal
 */

/**
 * The require keyword "imports" the express module into the
 * express variable. The express variable is then simply a 
 * JS object with functions that can be used to build the
 * server side app.
 */
const express = require("express");
/**
 * We use the express module function to build the app,
 * creating another JS object and setting it equal to
 * the variable app.
 */
const app = express();
/**
 * We use the express middleware "json" to be able
 * to parse incoming JSON data from the user in the
 * body of their POST requests.
 */
app.use(express.json());
/**
 * We use the express middleware "static" to inform
 * the app that when a request for a path is made,
 * first check if the name of the path matches a file
 * in the public folder, serve that file.
 */
app.use(express.static("public"));
/**
 * Tell the app to listen on port 3000. This is the same
 * number that shows up in the URL after "localhost".
 * By default, for users to connect to the server
 * go to localhost:3000.
 */
let listener = app.listen(3000, () => {
    console.log("Starting to listen at localhost:" + listener.address().port);
});

/** POST and GET Routes
 * Post and Get routes are the user interface for client
 * information receival. Clients can either send or receive
 * data from the server, while each request can configure
 * other variables or the state of the server.
 */

/**
 * The following function of the app sets up a post method
 * on the send-data route. On request, the sent data will
 * be in the req.body value and logged to the console. The
 * function will then send back a response message.
 * 
 * The (req, res) => {} is shorthand syntax for writing a lambda
 * function in Javascript with two arguments.
 */
app.post("/send-data", (req, res) => {
    //req and res means Request Object and Response Object respectively
    console.log(req.body.data);
    res.send({"message": "Your data was received successfully"});
});

/**
 * When the NodeJS process exits (by using Ctrl + C)
 * do the following function. (Print the closing message)
 */
process.on('SIGINT', () => {
    console.log("\nClosing down the server...");
    process.exit(0);
});