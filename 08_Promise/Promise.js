// PromiseOne: Creating a promise with a simulated async task
const PromiseOne = new Promise(function (resolve, reject) {
    // Simulating an async task like DB call or network request
    setTimeout(() => {
        if (true) {
            resolve(console.log("Data Fetch")); // Logs message and resolves
        } else {
            reject(console.log("Data Fetch")); // If false, reject
        }

        // Note: This second resolve is unnecessary and will be ignored
        resolve(); 
    }, 1000);
});

// Consuming PromiseOne
PromiseOne.then(() => {
    console.log("Promise Consumed");
});



// Async Task 2 with direct promise creation and resolution
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 2"); // Task logic
        resolve(); // Task successfully completed
    }, 1000);
}).then(() => {
    console.log("Async 2 Resolved"); // Consuming the resolved promise
});



// PromiseThree: Returning data from resolved promise
const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Resolving with an object (user data)
        resolve({
            username: "Chai",
            email: "Amolkadam127@gamil.com"
        });
    }, 1000);
}).then((user) => {
    // Consuming the resolved user data
    console.log(user);           // Full object
    console.log(user.email);     // Accessing email
    console.log(user.username);  // Accessing username
});



// PromiseFour: Handling error and chaining `.then`
const PromiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // Simulate an error
        // let error = false; // Simulate an error

        if (!error) {
            resolve({
                username: "Amolkadam",
                password: "Amol12345"
            });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

// Handling resolved and rejected outcomes with then/catch
PromiseFour.then((user) => {
    console.log(user);            // If resolved, print user object
    return user.username;        // Return username
}).catch((error) => {
    console.log(error);          // Catch block for handling rejection
});
