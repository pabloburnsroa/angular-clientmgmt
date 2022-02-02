import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from 'src/app/models/Client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }
  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then((res) => {
        // console.log('Successful login');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
