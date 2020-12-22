import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  inputFirstName: string;
  inputLastName: string;
  inputEmail: string;
  inputMob: string;
  inputPassword: string;
  inputConfirmPassword: string;

  myMobPattern = "[1-9][0-9]{9}"
  myEmailPattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
  myPasswordPattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,}"

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

}
