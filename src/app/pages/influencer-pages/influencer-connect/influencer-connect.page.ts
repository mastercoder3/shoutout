import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-influencer-connect',
  templateUrl: './influencer-connect.page.html',
  styleUrls: ['./influencer-connect.page.scss'],
})
export class InfluencerConnectPage implements OnInit {
  nativeWindow: any;
  href: string = "";

  constructor(
    private router: Router,
    private helper: HelperService,
    private api: ApiService
    ) { 
  }

  ngOnInit() {
    this.href = this.router.url;
    if(this.href.indexOf('access_token') > -1){
      this.helper.setToken(this.href.substring(this.href.indexOf("=")+1,this.href.length));
      localStorage.setItem('access_token',this.href.substring(this.href.indexOf("=")+1,this.href.length));
      this.api.updateInfluencerData(localStorage.getItem('uid'), {
        access_token: this.href.substring(this.href.indexOf("=")+1,this.href.length)
      })
      .then(res => {
        this.router.navigate(['dashboard/influencer']);
      })
    }
  }

  instagram(){
    window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=7b35de47d2ed4425a8165500fd89fea2&redirect_uri=http://localhost:8100/influencer-connect/&response_type=token';

  }

}
