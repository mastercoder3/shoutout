import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs: AngularFirestore) { }

  createUser(id,data){
    return this.afs.doc('users/' + id).set(data);
  }

  getUser(id){
    return this.afs.doc('users/' + id).valueChanges();
  }

  updateUser(id,data){
    return this.afs.doc('users/' + id).update(data);
  }

  // Influencer

  createInfluencer(id,data) {
    return this.afs.doc('influencer/' + id).set(data);
  }

  getInfluencerData(id) {
    return this.afs.doc('influencer/' + id ).valueChanges();
  }

  updateInfluencerData(id,data){
    return this.afs.doc('influencer/' + id).update(data);
  }

  // Company

  createcompany(id,data) {
    return this.afs.doc('company/' + id).set(data);
  }

  getCompanyData(id){
    return this.afs.doc('company/' + id).valueChanges();
  }

}
