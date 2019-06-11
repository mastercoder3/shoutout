import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-influencer-connect',
  templateUrl: './influencer-connect.page.html',
  styleUrls: ['./influencer-connect.page.scss'],
})
export class InfluencerConnectPage implements OnInit {
  nativeWindow: any;
  public href: string = "";

  constructor(private router: Router, private helper: HelperService) { 
  }

  ngOnInit() {
    console.log(window.opener);
    this.href = this.router.url;
    console.log(this.href);
    this.helper.getToken().subscribe(res =>{
      if(res !== ''){
        console.log(res)
        console.log('yess')
      }
    })
    if(this.href.indexOf('access_token') > -1){
      console.log('coming');
      // localStorage.setItem('access_token',this.href.substring(this.href.indexOf("=")+1,this.href.length) );
      this.helper.setToken(this.href.substring(this.href.indexOf("=")+1,this.href.length));
      this.router.navigate(['dashboard/influencer'])
    }
  }

  instagram(){
    window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=7b35de47d2ed4425a8165500fd89fea2&redirect_uri=http://localhost:8100/influencer-connect/&response_type=token';

  }

}
