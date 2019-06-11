import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {}

  messanger(){
    this.router.navigate(['dashboard/messanger']);
  }
  search(){
    this.router.navigate(['dashboard/acceuil']);
  }
  partnership(){
    this.router.navigate(['dashboard/company-influenceur']);
  }
  state(){
    this.router.navigate(['dashboard/influeneur-resaltats']);
  }

  menuclose(){
    this.menu.close('sidemenu');
  }
}
