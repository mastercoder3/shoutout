import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  form: FormGroup;
  base64Image;
  image = 'assets/imgs/profile.png';
  sourcex;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadImageId;
  data;
  blob: Blob;

  constructor(
    private authService: AuthenticationService,
    private api: ApiService,
    private fb: FormBuilder,
    private helper: HelperService,
    private fireStorage: AngularFireStorage) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      residence: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  submit(form) {
    console.log(form);
    this.data = {
      email: form.value.email,
      password: form.value.password,
      fname: form.value.nom,
      lname: form.value.prenom,
      dob: form.value.dob,
      phone: form.value.phone,
      residence: form.value.residence,
      category: form.value.category,
      imageURL: '',
      imageId: ''
    };
    this.helper.presentLoading();
    this.uploadImage();
  }

  choosePicture() {
    const element: HTMLElement = document.querySelector('input[type="file"]') as HTMLElement;
    element.click();
  }

  upload(event) {
    const x: any = document.getElementById('prodileImage');
    x.src = URL.createObjectURL(event.target.files[0]);
    this.convert(event.target.files[0]);
  }

  convert(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    try {
      reader.onload = (): void => {
        const base64String: string = (reader.result as string).match(
          /.+;base64,(.+)/
        )[1];
        this.base64Image = base64String;
        this.form.controls['image'].setValue(this.base64Image);
      };
    } catch ( e ) {
      //no error
    }
  }

  uploadImage() {
    this.uploadImageId = Math.floor(Date.now());
    this.ref = this.fireStorage.ref(`Thumbnails/${this.uploadImageId}`);
    const task = this.ref.putString( 'data:image/jpeg;base64,' + this.base64Image, 'data_url');
    task.snapshotChanges()
      .pipe(finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.image = url;
          if (this.image !== '') {
            this.data.imageURL = this.image;
            this.data.imageId = this.uploadImageId;
            this.createUser();
          }
        });
      })).subscribe();
  }

  createUser() {
    this.authService.signup(this.data.email, this.data.password)
    .then(res => {
      this.api.createUser(res.user.uid,
        {
          email: this.data.email,
          password: this.data.password,
          type: 'influencer'
        })
        .then((created) => {
          this.api.createInfluencer(res.user.uid, this.data)
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
