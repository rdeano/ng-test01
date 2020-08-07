import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatephonesComponent } from './admin/createphones/createphones.component';
import { LinkphonenumComponent } from './admin/linkphonenum/linkphonenum.component';
import { LinkphonenumuserComponent } from './admin/linkphonenumuser/linkphonenumuser.component';
import { UsersComponent } from './user/users/users.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { LinkphonesComponent } from './user/linkphones/linkphones.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CreatephonesComponent,
    LinkphonenumComponent,
    LinkphonenumuserComponent,
    UsersComponent,
    UserSidebarComponent,
    LinkphonesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
