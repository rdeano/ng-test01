import { Component, OnInit } from '@angular/core';
import { BackendapiService } from 'src/app/backendapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkphonenumuser',
  templateUrl: './linkphonenumuser.component.html',
  styles: [
  ]
})
export class LinkphonenumuserComponent implements OnInit {

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

  linkPhone(sysid) {
    var ret = confirm("Are you sure you want to link this?");
    if (!ret) {
      return;
    }

    const body = {
      userid : this.formId,
      phoneid : sysid
    }

    this.apiservice.linkPhoneToUser(body).subscribe((data : any) => {
      if (data !="1") {
        alert("Error");
      }

      alert("Phone succesfully linked");
      this.apiservice.getPhonesLinktouser(this.formId).subscribe((data : any) => {
        this.phonesLink = data;
      })
      
    })

  }

}
