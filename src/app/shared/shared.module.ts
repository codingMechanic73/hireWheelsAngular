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

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SigninModalComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule
  ],
  exports: [NavBarComponent, FooterComponent, SigninModalComponent]
})

export class SharedModule { }
