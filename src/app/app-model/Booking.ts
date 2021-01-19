import { Passenger } from "./Passenger";
import { Payment } from "./Payment";

export class Booking {
    userId: number;
    flightId: number;
    passengers: Passenger= new Passenger();
    payment: Payment= new Payment();
}