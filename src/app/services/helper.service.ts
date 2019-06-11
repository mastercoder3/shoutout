import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  loading;
  token: BehaviorSubject<string>;

  constructor(
    private loadingController: LoadingController
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

}
