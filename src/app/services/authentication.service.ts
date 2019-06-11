import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email,password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  signup(email,password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }
}
