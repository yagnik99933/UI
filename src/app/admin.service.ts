import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './app-model/Admin';
import { FlightDetails } from './app-model/FlightDetails';
import { Schedule } from './app-model/schedule';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  admin(admin: Admin) {
    throw new Error('Method not implemented.');
  }
  flight(admin: Admin) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  addFlight(flightDetails: FlightDetails) {
    let url = 'http:  localhost:8181/addFlight';
    return this.http.post<FlightDetails>(url, flightDetails);
  }

  // Schedule Flight Function:
  scheduleFlight(scheduleDetails: Schedule) {
    let url = 'http:  localhost:8181/scheduleFlight';
    return this.http.post<FlightDetails>(url, scheduleDetails);
  }

  deleteFlight(admin: Admin) {
    let url = 'http:  localhost:8181/booking';
    return this.http.post<Admin>(url, admin);
  }
}
