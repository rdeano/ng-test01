import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendapiService} from 'src/app/backendapi.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styles: [
  ]
})
export class CreateuserComponent implements OnInit {

  constructor(private apiservice : BackendapiService) { }

  ngOnInit(): void {
  }

  createUser(form: NgForm) {
    const body = {
      username : form.value.username,
      password : form.value.password,
      name : form.value.name
    }

    this.apiservice.createUser(body).subscribe((data : any) => {
      if (data != "1") {
        alert("Error");
      }

      alert("Created new user succesfully");
      form.reset();
    })
  }

}
