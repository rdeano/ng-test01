import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { CreatephonesComponent } from './admin/createphones/createphones.component';
import { LinkphonenumComponent } from './admin/linkphonenum/linkphonenum.component';
import { LinkphonenumuserComponent } from './admin/linkphonenumuser/linkphonenumuser.component';
import { UsersComponent } from './user/users/users.component';
import { LinkphonesComponent } from './user/linkphones/linkphones.component';

const routes: Routes = [
  { path: 'admin', component: CreateuserComponent },
  { path: 'admin/createphonenumber', component: CreatephonesComponent },
  { path: 'admin/linkphonenum', component: LinkphonenumComponent },
  { path: 'admin/linkphonenum/:formId', component: LinkphonenumuserComponent },

  { path: 'user', component: UsersComponent },
  { path: 'user/linkphonenum/:formId', component: LinkphonesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
