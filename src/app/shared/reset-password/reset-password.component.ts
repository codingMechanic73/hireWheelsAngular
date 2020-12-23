import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  user = new User();
  inputConfirmPassword: string;

  constructor(private authService: AuthService) { }
  accountSuccess: number = 0;
  message: string;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
    this.authService.resetPassword(this.user).subscribe(
      result => {
        if (result['statusCode'] === 200) {
          console.log(result['message']);
          this.accountSuccess = 1;
          this.message = result['message'];
        }
      },
      (error) => {
        console.log("error........")
        this.accountSuccess = -1;
        this.message = error['message'];
        console.log(error['message']);
      })
  }
}
