import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public AfAuth: AngularFireAuth) {}

  // Login method
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AfAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
    });
  }

  // Check if logged in
  getAuth() {
    return this.AfAuth.authState.pipe((auth) => auth);
  }

  // Logout
  logout() {
    this.AfAuth.signOut();
  }

  // Register
  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AfAuth.createUserWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
    });
  }

}
