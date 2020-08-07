import { Component, OnInit } from '@angular/core';
import { BackendapiService } from 'src/app/backendapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkphones',
  templateUrl: './linkphones.component.html',
  styles: [
  ]
})
export class LinkphonesComponent implements OnInit {

  formId : number;
  private sub : any;
  userinfo: any;
  phones : [];
  phonesLink : [];


  constructor(private apiservice : BackendapiService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.formId = +params['formId']; // (+) converts string 'id' to a number
    });
    this.userinfo = {
      name : "",
    }
    this.getUserinfoById(this.formId);
    this.getPhones();
    this.getPhonesLinktouser();
  }


  getUserinfoById(sysid) {
    this.apiservice.getUserinfoById(sysid).subscribe((data : any) => {
      // console.log(data);
      this.userinfo = {
        name : data.name
      }

    })
  }

  getPhones() {
    this.apiservice.getPhones().subscribe((data : any) => {
      this.phones = data;
    })
  }
   
  getPhonesLinktouser() {
    this.apiservice.getPhonesLinktouser(this.formId).subscribe((data : any) => {
      this.phonesLink = data;
    })
  }

}
