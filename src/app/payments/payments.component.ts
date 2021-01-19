import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../app-model/Booking';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentMethod: string;
  booking: Booking = new Booking();
  response: any;
  message: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.paymentMethod = event.target.value;
  }

  book() {
    //update the ui
    //console.log(this.paymentMethod);
    this.booking.userId = Number(sessionStorage.getItem('userId'));
    this.booking.flightId = Number(sessionStorage.getItem('flightId'));
    this.booking.passengers.passengerName = sessionStorage.getItem('passengerName');
    this.booking.passengers.passengerAge = Number(sessionStorage.getItem('passengerAge'));
    this.booking.passengers.seat.seatId = Number(sessionStorage.getItem('seatId'));
    this.booking.payment.paymentMode = this.paymentMethod;
    //  console.log(this.booking.payment.paymentMode);
    // console.log(this.booking.passengers);
    console.log(this.booking);

      this.userService.addBooking(this.booking).subscribe(response => {
        this.response = response;
        if (this.response.status == "SUCCESS"){
        alert("Booking done successfully!")
        this.router.navigate(['home']);
        }
        else {
          alert(this.response.message);
          this.message = this.response.message;
      }

    });



  }
}
