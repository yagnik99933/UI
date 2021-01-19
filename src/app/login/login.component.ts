import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Login } from '../app-model/Login';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  message: string;
  response: any;

  constructor(private userService: UserService, private router: Router) { }

  redirect(){
    this.router.navigate(['home']);
  }

  loginCheck() {
    console.log(this.login);
    this.userService.login(this.login).subscribe(response => {
      this.response = response;
      console.log(this.response);
      if (this.response.status == "SUCCESS") {
        let userId = this.response.userId;
        sessionStorage.setItem('userId', String(userId));
        alert(this.response.message);
        this.router.navigate(['dashboard']);
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

// export class Login{
//   email:string;
//   password:string;
// }