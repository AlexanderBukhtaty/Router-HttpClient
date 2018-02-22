import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  
  login() {
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', 'true');
    });
  }
  
  logout() {
    localStorage.removeItem('token');
  }
}
