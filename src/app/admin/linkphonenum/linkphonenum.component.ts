import { Component, OnInit } from '@angular/core';
import { BackendapiService } from 'src/app/backendapi.service';

@Component({
  selector: 'app-linkphonenum',
  templateUrl: './linkphonenum.component.html',
  styles: [
  ]
})
export class LinkphonenumComponent implements OnInit {

  userinfo : [];

  constructor(private apiservice : BackendapiService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.apiservice.getUser().subscribe((data : any) => {
      this.userinfo = data;
      // console.log(data);
    })
  }
}
