import {FC, useState} from "react";

// TODO - Here we will communicate with a REST API
//        You will need to write some asynchronous functions and use them
//        to perform a sequence of tasks.
//        You may use async/await or promises.
//        Be sure to use explicit strong types for the function return types.
//        NOTE - if you need to reset the data, simple revert/rollback/checkout "db.json" in "json-services"

// TODO: Step 1 - Create an interface to represent a flight
//                Hint - Look at http://localhost:8080/flights in a browser to see the data shape

// TODO: Step 2 - Write a function, getAllFlights, that reads all flights
//                Hint - Perform a GET at http://localhost:8080/flights
//                       Use the "fetch" function - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// TODO: Step 5 - Write a function, deleteFlight, that will delete a flight given an id number
//                Hint - Perform a DELETE at http://localhost:8080/flights/<id>
//                                      e.g. http://localhost:8080/flights/102

// TODO: Step 8 - Write a function, addFlight, that will add a new flight
//                Hint - Perform a POST at http://localhost:8080/flights


export const AsyncAwaitFetchExercise: FC = () => {
    const [logText, setLogText] = useState("");

    const resetLog = () => setLogText("");
    const log = (input: any) => setLogText(prev => `${prev}\n${input}`);

    function execute() {
        resetLog();

        // TODO: Step 3 - Get all flights and log
        //                Store in a variable called "originalFlights" for later use
        log("---- Reading flights");

        // TODO: Step 4 - Log info about the flights
        //                Log the number of flights
        //                Log the id's of the flights going to "London Gatwick"
        log("---- Flights going to London Gatwick");

        // TODO: Step 6 - In PARALLEL, delete all flights going to "London Gatwick"
        log("---- Deleting Flights");

        // TODO: Step 7 - Re-read flight info and info about the new flights
        //                Log the number of flights - has the operation worked?
        //                Log the id's of the flights going to "London Gatwick" - there should be none
        log("---- Re-reading Flights");

        // TODO: Step 9 - Use the "originalFlights" variable to re-add the deleted "London Gatwick" flights
        //                Add all the flights in PALALLEL
        log("---- Adding Gatwick Flights back");

        // TODO: Step 10 - Log info about the flights
        //                Log the number of flights - has the operation worked?
        //                Log the id's of the flights going to "London Gatwick" - there should be same as before
        log("---- Re-reading Flights");
    }

    return (
        <div>
            <h1>Async Await - Fetch Exercise</h1>
            <hr/>
            <div>
                <button className="btn btn-primary my-2" onClick={execute}>Execute Routine</button>
            </div>
            <h2>Log</h2>
            <pre>{logText}</pre>
        </div>
    )
}
