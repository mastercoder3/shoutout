import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.page.html',
  styleUrls: ['./influencer.page.scss'],
})
export class InfluencerPage implements OnInit {

  userData;
  instaInfo;
  instaPosts;
  instaPostThumbs=[];
  access_token:string = '';

  //http://localhost:8100/influencer-connect#access_token=3020595291.7b35de4.7ea85a6cc3b84d5d8ef8ece55574c5c2
  constructor(
    private api: ApiService,
    private helper: HelperService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('access_token')) {
      this.access_token = localStorage.getItem('access_token');
      this.getInstaData();
    }
    this.api.getInfluencerData(localStorage.getItem('uid'))
      .subscribe(res =>{
        this.userData = res;
        console.log(res);
        if(this.access_token === '') {
          this.access_token = this.userData.access_token;
          this.getInstaData();
        }
             
      });

  }

  getInstaData() {
    this.helper.getUserInfo(this.access_token)
    .subscribe(res =>{
      console.log(res);
      this.instaInfo = res;
    });
  this.helper.getUserMedia(this.access_token)
    .subscribe(res =>{
      console.log(res);
      this.instaPosts = res;
      for(let i = 0; i < (this.instaPosts.data.length > 9 ? 9 : this.instaPosts.data.length); i++ ){
        this.instaPostThumbs.push(this.instaPosts.data[i].images.thumbnail.url);
      }
    })
  }

}
