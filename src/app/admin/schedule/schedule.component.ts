import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Schedule } from 'src/app/app-model/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}
  schedule: Schedule = new Schedule();
  message: string;
  response: any;
  arrival_date: string;
  departure_date: string;

  ngOnInit(): void {}

  scheduleFlight() {
    //console.log("avni");
    console.log(this.schedule);
    console.log(typeof this.arrival_date);
    console.log(this.departure_date);

    var arr_date = this.arrival_date.split('-');
    console.log(arr_date);
    var dep_date = this.departure_date.split('-');
    // this.adminService.scheduleFlight(this.schedule).subscribe((response) => {
    //   this.response = response;
    //   console.log(this.response);
    //   if (this.response.status == 'SUCCESS') {
    //     alert(this.response.message);
    //     this.router.navigateByUrl('admin');
    //   } else {
    //     alert(this.response.message);
    //     this.message = this.response.message;
    //   }
    // });
  }
}
