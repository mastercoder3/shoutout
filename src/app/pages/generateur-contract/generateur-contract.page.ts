import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generateur-contract',
  templateUrl: './generateur-contract.page.html',
  styleUrls: ['./generateur-contract.page.scss'],
})
export class GenerateurContractPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  influenc(){
    this.router.navigate(['dashboard/influencer']);
  }
}
