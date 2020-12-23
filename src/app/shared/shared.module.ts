import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CoreModule } from '../core/core.module';
import {HttpClientModule} from '@angular/common/http'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SigninModalComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  exports: [NavBarComponent, FooterComponent, SigninModalComponent]
})

export class SharedModule { }
