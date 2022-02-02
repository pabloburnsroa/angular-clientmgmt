import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from 'src/app/models/Client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.authService
      .register(this.email, this.password)
      .then((res) => {
        // console.log('Successful login');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
