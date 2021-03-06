import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})

export class RegisterUserComponent implements OnInit{
  message: string;

  fname: string;
  lname: string;
  username: string;
  role: string;
  email: string;
  password: string;
  

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(){}

  onRegister() {
    const user = {
      fname: this.fname,
      lname: this.lname,
      username: this.username,
      role: this.role,
      email: this.email,
      password: this.password
    }    
    
    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      if(data.success){
        this.router.navigate(['/login']);
      } else {
        this.message = "Registration error...";
        this.router.navigate(['/register']);
      }
    })

  }
}
