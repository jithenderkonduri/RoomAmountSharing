// index.component.ts

import { Component, OnInit } from "@angular/core";
import { Users } from "../users";
import { UserService } from "../users.service";

@Component({
  selector: "app-index",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class UserListComponent implements OnInit {
  users: Users[];

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.usersList();
  }
  usersList() {
    this.userservice.getUser().subscribe(data => (this.users = data.result));
  }
  deleteUser(id) {
    this.userservice.deleteUser(id).subscribe(res => {
      this.userservice.getUser().subscribe(data => (this.users = data.result));
    });
  }
}
