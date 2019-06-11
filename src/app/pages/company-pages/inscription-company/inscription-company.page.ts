import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inscription-company',
  templateUrl: './inscription-company.page.html',
  styleUrls: ['./inscription-company.page.scss'],
})
export class InscriptionCompanyPage implements OnInit {
  form: FormGroup;
  image='assets/imgs/profile.png';
  sourcex;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadImageId;
  data;
  blob: Blob;

  constructor(private authService: AuthenticationService, private api: ApiService, private fb: FormBuilder, private fireStorage: AngularFireStorage ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.email],
      password: ['',Validators.required],
      nom: ['',Validators.required],
      prenom: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['',Validators.required],
      residence: ['', Validators.required]
  })
}
submit(form){
  this.authService.signup(form.value.email, form.value.password)
  .then(res =>{
    this.api.createUser(res.user.uid, {email: form.value.email, password: form.value.password, nom: form.value.nom, prenom: form.value.prenom, phone: form.value.phone, type: 'company'  })
    .then(ress=>{
      localStorage.setItem('uid',res.user.uid);
      
    },err =>{

    })
},err=>{

});
}

}
