import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/model/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @Output('onSignUp') onSignUp = new EventEmitter<number>();
  inputEmail: string;
  inputPassword: string;
  accountSuccess: number = 0;
  message: string;
  user = new User()
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user)
    this.authService.signin(this.user).subscribe(
      result => {
        console.log(result)
        this.accountSuccess = 1;
        this.message=result.successMessage;


      }, (error) => {
        this.accountSuccess = -1;
        this.message = error['message'];
      }
    )

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openSignUp() {
    console.log("Event")
    this.onSignUp.emit(2);
  }



}
