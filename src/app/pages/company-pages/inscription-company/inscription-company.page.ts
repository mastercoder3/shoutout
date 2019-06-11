import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-inscription-company',
  templateUrl: './inscription-company.page.html',
  styleUrls: ['./inscription-company.page.scss'],
})
export class InscriptionCompanyPage implements OnInit {
  form: FormGroup;
  image = 'assets/imgs/profile.png';
  data;

  constructor(
    private authService: AuthenticationService,
    private api: ApiService,
    private fb: FormBuilder,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      companynom: ['', Validators.required],
      phone: ['', Validators.required],
      category: ['', Validators.required],
      pays: ['', Validators.required],
      numsiret: ['', Validators.compose([Validators.required, Validators.minLength(14)])]
    })
  }
  submit(form) {
    this.data = {
      email: form.value.email,
      password: form.value.password,
      fname: form.value.nom,
      lname: form.value.prenom,
      companyName: form.value.companynom,
      phone: form.value.phone,
      category: form.value.category,
      pays: form.value.pays,
      companyNumber: form.value.numsiret
    };

    this.helper.presentLoading();
    this.authService.signup(this.data.email, this.data.password)
      .then(res => {
        this.api.createUser(res.user.uid,
          {
            email: this.data.email,
            password: this.data.password,
            type: 'company'
          })
          .then((created) => {
            this.api.createcompany(res.user.uid, this.data)
              .then(after => {
                this.helper.closeLoading();
                localStorage.setItem('uid', res.user.uid);
              });
          }, err => {
            this.helper.closeLoading();
          });
      }, err => {
        this.helper.closeLoading();
      });
  }

}
