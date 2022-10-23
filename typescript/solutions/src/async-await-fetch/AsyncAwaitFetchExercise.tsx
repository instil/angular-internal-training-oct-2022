import {FC, useState} from "react";

interface Flight {
    id: number;
    origin: string;
    destination: string;
    departure: string;
    arrival: string;
}

const baseUrl = "http://localhost:8080/flights";

async function getAllFlights(): Promise<Flight[]> {
    const response = await fetch(baseUrl);
    return await response.json();
}

async function deleteFlight(id: number): Promise<void> {
    await fetch(`${baseUrl}/${id}`, {
        method: "DELETE"
    });
}

async function addFlight(flight: Flight): Promise<void> {
    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(flight),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function isGatwickFlight(flight: Flight): boolean {
    return flight.destination === "London Gatwick";
}

function toId(flight: Flight): number {
    return flight.id;
}

export const AsyncAwaitFetchExercise: FC = () => {
    const [logText, setLogText] = useState("");

    const resetLog = () => setLogText("");
    const log = (input: any) => setLogText(prev => `${prev}\n${input}`);

    async function execute(): Promise<void> {
        resetLog();

        function logFlightInfo(flights: Flight[]) {
            log(`Number of flights: ${flights.length}`);

            const flightIds = flights.filter(isGatwickFlight).map(toId).join(", ");
            log(`Gatwick Flights: ${flightIds}`);
        }

        log("---- Reading flights");
        const originalFlights = await getAllFlights();

        log("---- Flights going to London Gatwick");
        logFlightInfo(originalFlights);

        log("---- Deleting Flights");
        await Promise.all(
            originalFlights
                .filter(isGatwickFlight)
                .map(toId)
                .map(deleteFlight)
        );

        log("---- Re-reading Flights");
        let newFlights = await getAllFlights();
        logFlightInfo(newFlights);

        log("---- Adding Gatwick Flights back");
        await Promise.all(
            originalFlights
                .filter(isGatwickFlight)
                .map(addFlight)
        );

        log("---- Re-reading Flights");
        newFlights = await getAllFlights();
        logFlightInfo(newFlights);
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
