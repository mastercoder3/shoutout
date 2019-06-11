import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencer-connect',
  templateUrl: './influencer-connect.page.html',
  styleUrls: ['./influencer-connect.page.scss'],
})
export class InfluencerConnectPage implements OnInit {
  nativeWindow: any;
  public href: string = "";

  constructor(private router: Router) { 
  }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }
  instagram(){
    window.open('https://api.instagram.com/oauth/authorize/?client_id=672bea92a0d2477faf72f13f4d35930f&redirect_uri=http://localhost:3000/&response_type=token');
  }
}
