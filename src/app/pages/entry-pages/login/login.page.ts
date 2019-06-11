import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData = {
    email: '',
    password: ''
  }
  ress: any;
  constructor(private auth: AngularFireAuth, private router: Router, private authService: AuthenticationService , private api: ApiService) { }

  ngOnInit() {
  }
  Login(){
    if(this.userData.email !== '' && this.userData.password !==''){
      this.authService.login(this.userData.email,this.userData.password)
        .then(res =>{
          this.api.getUser(res.user.uid).subscribe(ress =>{
            this.ress=ress
            if(this.ress.type==='Influencer'){
             this.router.navigate(['dashboard/influencer']);
            }
            else if(this.ress.type==='company'){
              this.router.navigate(['dashboard/company-influenceur']);
            }
            localStorage.setItem('pid',res.user.uid)
          })
        }, err =>{
          alert("Wrong email or password")
        })
    }
  }

}
