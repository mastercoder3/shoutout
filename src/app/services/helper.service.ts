import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  loading;
  token: BehaviorSubject<string>;

  constructor(
    private loadingController: LoadingController,
    private http: HttpClient
  ) {
    if(localStorage.getItem('access_token')){
      this.token = new BehaviorSubject<string>(localStorage.getItem('access_token'));
    }
    else{
      this.token = new BehaviorSubject<string>('');
    }
   }

   setToken(val){
     this.token.next(val);
   }

   getToken(){
     return this.token.asObservable();
   }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 10000
    });
    await this.loading.present();
  }

  closeLoading() {
    this.loading.dismiss();
  }

  getUserInfo(id){
    let url = 'https://api.instagram.com/v1/users/self/?access_token='+id;
    // const headers = new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set("Accept","application/json")

    return this.http
    .get(url);
  }

  getUserMedia(id){
    let url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+id;

    return this.http
    .get(url);
  }



}
