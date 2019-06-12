import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-company-front',
  templateUrl: './company-front.page.html',
  styleUrls: ['./company-front.page.scss'],
})
export class CompanyFrontPage implements OnInit {

  userData;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCompanyData(localStorage.getItem('uid'))
      .subscribe( res => {
        this.userData = res;
        console.log(res);
      });
  }

}
