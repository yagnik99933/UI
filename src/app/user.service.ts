import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './app-model/Booking';
import { FlightSearch } from './app-model/FlightsSearch';
import { Login } from './app-model/Login';
import { User } from './app-model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    let url = "http://localhost:8181/register";
    return this.http.post(url, user);
  }

  login(login: Login) {
    let url = "http://localhost:8181/login";
    return this.http.post(url, login);

  }

  flightSearch(flightSearch: FlightSearch) {
    let url = "http://localhost:8181/search";
    return this.http.post(url, flightSearch);
  }

  addBooking(booking: Booking) {
    let url = "http://localhost:8181/booking";
    return this.http.post(url, booking);
  }

  cancelBooking(bookingId: number) {
    let url = "http://localhost:8181/cancel";
    return this.http.post(url, bookingId);
  }

  viewBookings(user: User) { 
    let url = "http://localhost:8181/myBookings?userId="+user.userId;
    return this.http.get(url);
  }
}
