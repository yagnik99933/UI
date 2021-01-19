import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../app-model/FlightsSearch';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  flightSearch: FlightSearch= new FlightSearch();
  message: string;
  response: any;
 headers = ["Flight Name", "From", "To", "Time of Departure", "Time of Arrival", "Price"];


  constructor(private userService: UserService, private router: Router) { }

  search() {
    console.log(this.flightSearch);
    this.userService.flightSearch(this.flightSearch).subscribe(response => {
      this.response = response;
      console.log(this.response);
    });
  }

  proceedToBook($event: any,id: any){
    let flightId = id;
    sessionStorage.setItem('flightId', String(flightId));
    this.router.navigate(['seat']);
    console.log(id);
  }


  ngOnInit(): void {
  }

}
