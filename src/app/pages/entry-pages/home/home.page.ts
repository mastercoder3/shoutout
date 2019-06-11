import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generate } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
constructor(private router : Router) { }

connect(){
  this.router.navigate(['influencer-connect']);
}


generate(){
  this.router.navigate(['generateur-contract']);
}

} 