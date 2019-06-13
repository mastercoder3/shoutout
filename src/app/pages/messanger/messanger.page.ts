import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.page.html',
  styleUrls: ['./messanger.page.scss'],
})
export class MessangerPage implements OnInit {

  chats=[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCompanyChat(localStorage.getItem('uid'))
      .pipe(map(actions => actions.map(a =>{
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        return {did, ...data};
      })))
        .subscribe((res:Array<any>) => {
          this.chats = res;
          console.log(res);
        });
  }

}
