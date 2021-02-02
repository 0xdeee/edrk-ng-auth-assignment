import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./_services/authentication.service";
import { User } from "./_models/user";
import { identifierModuleUrl } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  currentUser: User;
  isAdmin: boolean;
  title = "ng-auth-assignment";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    if (this.currentUser.role === "admin") {
      this.isAdmin = true;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
