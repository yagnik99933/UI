import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../app-model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  message: string;
  response: any;

  constructor(private userService: UserService, private router: Router) { }

  redirect(){
    this.router.navigate(['home']);
  }

  register() {
    console.log(this.user);
    this.userService.register(this.user).subscribe(response => {
      this.response = response;
      console.log(this.response);
      if (this.response.status == "SUCCESS") {
        alert(this.response.message);
        this.router.navigateByUrl('login');
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
