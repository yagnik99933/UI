import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addFlight() {
    this.router.navigate(['home/admin/addflight']);
  }

  scheduleFlight() {
    this.router.navigate(['home/admin/scheduleflight']);
  }
}
