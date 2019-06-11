import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.page.html',
  styleUrls: ['./influencer.page.scss'],
})
export class InfluencerPage implements OnInit {

  userData;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getInfluencerData(localStorage.getItem('uid'))
      .subscribe(res =>{
        this.userData = res;
      });
  }

}
