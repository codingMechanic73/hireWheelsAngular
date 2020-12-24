import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { userDetails } from 'src/app/model/userDetails';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavBarComponent implements OnInit {
  userDetails: userDetails = new userDetails();
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userDetails = this.authService.getUser();

    if (this.userDetails != null) {
      this.updateNavLinks();
    }

    this.authService.user.subscribe(userDetails => {
      this.userDetails = userDetails;
      this.updateNavLinks();
      if (userDetails == null) {
        this.router.navigate(['home'], { relativeTo: this.activatedRoute });
      }

    });
  }
  navLinks: { label: string, route: string }

  userNavLinks = {
    label: `wallet`,
    route: '',
  };

  adminNavLinks =
    {
      label: 'Dashboard',
      route: 'admin',
    }
    ;

  updateNavLinks() {
    if (this.userDetails && this.userDetails.roleName === 'Admin') {
      this.navLinks = this.adminNavLinks;
    } else {

      this.userNavLinks.label = `${this.userDetails.walletMoney}`;
      this.navLinks = this.userNavLinks;
    }
    console.log(this.navLinks)
  }

  handleSignOut() {
    this.authService.logout();
    this.router.navigate(['home'], { relativeTo: this.activatedRoute });
  }

}
