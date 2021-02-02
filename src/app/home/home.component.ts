import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

import { User } from "../_models/user";
import { AuthenticationService } from "../_services/authentication.service";
import { UserService } from "../_services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];
  isAdmin: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.isAdmin = this.currentUser.role === "admin" ? true : false;
  }

  goToAdminDash() {
    this.router.navigate(["/userlist"]);
  }
}
