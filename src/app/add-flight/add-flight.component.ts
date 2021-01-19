import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import  {Admin} from '../app-model/Admin';
import  {FlightDetails} from '../app-model/FlightDetails';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})

export class AddFlightComponent implements OnInit {


    flightDetails: FlightDetails = new FlightDetails();
    message: string;
    response: any;
  
    constructor(private adminService: AdminService,private router:Router) { }
    
    addFlight() {

      //console.log("avni");
      console.log(this.flightDetails);
      this.adminService.addFlight(this.flightDetails).subscribe(response => {
        this.response = response;
        console.log(this.response);
        if (this.response.status == "SUCCESS") {
          alert(this.response.message);
         this.router.navigateByUrl('admin');
        }
        else {
          alert(this.response.message);
          this.message = this.response.message;
        }
      })
    }
    ngOnInit(): void {
    }
  
}
