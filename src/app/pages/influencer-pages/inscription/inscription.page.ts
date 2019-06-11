import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  form: FormGroup;
  base64Image;
  image='assets/imgs/profile.png';
  sourcex;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadImageId;
  data;
  blob: Blob;

  constructor(  private authService: AuthenticationService, private api: ApiService, private fb: FormBuilder, private fireStorage: AngularFireStorage ) { }

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
      this.api.createUser(res.user.uid, {email: form.value.email, password: form.value.password, nom: form.value.nom, prenom: form.value.prenom, dob: form.value.dob, phone: form.value.phone, residence: form.value.residence, type: 'Influencer'  })
      .then(ress=>{
        localStorage.setItem('uid',res.user.uid);
        
      },err =>{

      })
  },err=>{

  });
  }

  
  
  
  
  upload(event) {
    // console.log(event)
    let x:any = document.getElementById('prodileImage');
    x.src = URL.createObjectURL(event.target.files[0]);
    this.uploadImageId= Math.floor(Date.now())
    this.ref = this.fireStorage.ref(`Thumbnails/${this.uploadImageId}`);
    let task = this.ref.put(event.target.files[0]);

    
    // let upload = this.task.percentageChanges();
    // task.snapshotChanges()
    //   .pipe(finalize(() => {
    //     this.ref.getDownloadURL().subscribe(url => {
    //       this.image = url;
    //       if(this.image !== ''){
    
    //       }
    //     });
    //   })).subscribe();
  }
}
