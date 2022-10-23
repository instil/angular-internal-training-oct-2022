export function showPromises() {

    // A simple promise
    let promise = new Promise((resolve, reject) => {
        console.log("DEBUG: About to start really long calculation");
        setTimeout(() => resolve(42), 5000);
        console.log("DEBUG: I'll get the answer back to you soon");
    });
    promise.then(val => console.log(`RESULT A: Really long calculation returned ${val}`));

    // Returning a promise from a function
    function fetchThatThing(): Promise<string> {
        console.log("DEBUG: Let me fetch that thing for you");
        let promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => resolve("ThatThing"), 1000);
        });
        console.log("DEBUG: I'll let you know when I have it");
        return promise;
    }

    fetchThatThing().then((thing) => console.log(`RESULT B: I got ${thing}`));

    // A promise that fails
    let failingPromise = new Promise((resolve, reject) => reject("Earth has been demolished."));
    failingPromise.then(() => console.log("RESULT C: this will not be called"))
        .catch((reason) => console.log(`FAIL C: ${reason}`));


    // A list of promises
    let promise1 = Promise.resolve(42);
    let promise2 = "so long";
    let promise3 = new Promise((resolve, reject) => setTimeout(() => resolve("and thanks for all the fish"), 3000));
    Promise.all([promise1, promise2, promise3])
        .then((values) => console.log("RESULT D: " + values));


    // A promise race
    let promise4 = new Promise((resolve, reject) => setTimeout(() => resolve("RESULT E: Promise 4 is TOO SLOW"), 500));
    let promise5 = new Promise((resolve, reject) => setTimeout(() => resolve("RESULT E: Promise 5 WINS !!"), 200));
    Promise.race([promise4, promise5]).then((winner) => console.log(winner));

}
