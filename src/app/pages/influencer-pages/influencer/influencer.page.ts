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

  //http://localhost:8100/influencer-connect#access_token=3020595291.7b35de4.7ea85a6cc3b84d5d8ef8ece55574c5c2
  constructor(
    private api: ApiService,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.api.getInfluencerData(localStorage.getItem('uid'))
      .subscribe(res =>{
        this.userData = res;
        console.log(res);
      });
    this.helper.getUserInfo('3020595291.7b35de4.7ea85a6cc3b84d5d8ef8ece55574c5c2')
      .subscribe(res =>{
        console.log(res);
        this.instaInfo = res;
      });
    this.helper.getUserMedia('3020595291.7b35de4.7ea85a6cc3b84d5d8ef8ece55574c5c2')
      .subscribe(res =>{
        console.log(res);
        this.instaPosts = res;
        this.instaPosts.data.forEach(a =>{
          this.instaPostThumbs.push(a.images.thumbnail.url);
        })
      })
  }

}
