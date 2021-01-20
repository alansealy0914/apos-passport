import { Component, OnInit } from "@angular/core";
import { AuthenticationService, UserDetails } from "../authentication.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  //@Input() profile: Profile[];
  constructor(private auth: AuthenticationService, private router: Router) {}

  goToCreateOrder() {
    this.router.navigate(['/orders/create']);
}
  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    );
  }
}
