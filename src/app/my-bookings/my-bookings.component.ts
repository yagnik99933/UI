import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../app-model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  user: User = new User();
  response: any;
  bookingId: number;
  headers = ["Booking Id","Status", "Flight Name", "Departure Date", "Arrival Date", "From", "To", "Departure Time", "Arrival Time", "Cost", "Passenger Name"];

  constructor(private userService: UserService, private router: Router) { }

  proceedToCancel($event: any,id: any){
    //flightid to be passed here
    this.bookingId= id;
    this.userService.cancelBooking(this.bookingId).subscribe(response => {
      this.response = response;
      console.log(this.response);
  });
}

  ngOnInit(): void {
      this.user.userId=Number(sessionStorage.getItem('userId'));
      this.userService.viewBookings(this.user).subscribe(response => {
      this.response = response;
      console.log(this.response);

    });
   

}
}
