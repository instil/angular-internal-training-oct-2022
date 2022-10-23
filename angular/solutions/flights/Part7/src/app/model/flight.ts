export interface Flight {
  id: number;
  origin: string;
  departure: Date;
  destination: string;
  arrival: Date;
}

export function remapFlight(flight: Flight): Flight {
  return {
    ...flight,
    departure: new Date(flight.departure),
    arrival: new Date(flight.arrival)
  };
}
