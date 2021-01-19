import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../app-model/Admin';
import { Login } from '../app-model/Login';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css'],
})
export class DeleteFlightComponent implements OnInit {
  admin: Admin = new Admin();
  message: string;
  response: any;

  constructor(private adminService: AdminService, private router: Router) {}

  redirect() {
    this.router.navigate(['home']);
  }

  // deleteFlight() {
  //   console.log(this.admin);
  //   this.adminService.deleteFlight(this.admin).subscribe(response => {
  //     this.response = response;
  //     console.log(this.response);
  //     if (this.response.status == "SUCCESS") {
  //       let adminId = this.response.adminId;
  //      sessionStorage.setItem('adminId', String(adminId));
  //       alert(this.response.message);
  //       this.router.navigate(['dashboard']);
  //     }
  //     else {
  //       alert(this.response.message);
  //       this.message = this.response.message;
  //     }

  //   })
  // }
  ngOnInit(): void {}
}
