import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
@Output('onSignUp') onSignUp = new EventEmitter<number>();
  inputEmail: string;
  inputPassword: string;
  
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openSignUp() {
    console.log("Event")
    this.onSignUp.emit(2);
  }
  

  
}
