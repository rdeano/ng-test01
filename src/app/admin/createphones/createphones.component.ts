import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendapiService } from 'src/app/backendapi.service';

@Component({
  selector: 'app-createphones',
  templateUrl: './createphones.component.html',
  styles: [
  ]
})
export class CreatephonesComponent implements OnInit {

  constructor(private apiservice : BackendapiService) { }

  ngOnInit(): void {
  }

  createPhonenumber(form: NgForm) {
    // console.log(form.value.phonenumber);
    const body = {
      phonenumber : form.value.phonenumber
    };

    this.apiservice.createPhoneNumber(body).subscribe((data : any) => {
      if (data != "1") {
        alert("Error");
      }

      alert("Phone number created succesfully");
      form.reset();
    })
  }

}
