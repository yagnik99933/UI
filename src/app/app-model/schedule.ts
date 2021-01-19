export class Schedule {
  price: number;
  departure_airport: string;
  arrival_airport: string;
  flightId: any;
  schedule: [{ depature_date: Date; arrival_date: Date }];
}
