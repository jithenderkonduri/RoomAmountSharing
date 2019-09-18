import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../users.service";
import { Users } from "../users";
import { first } from "rxjs/operators";

@Component({
  selector: "app-user",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class UserCreateComponent implements OnInit {
  userObj: Users[];
  userForm: FormGroup;
  msg: string = null;
  showMsg: boolean = false;
  constructor(private UserService: UserService, private fb: FormBuilder) {}
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required]
    });
  }
  addUser() {
    this.UserService.addUser(this.userForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.msg = "User Create successfully";
          this.userForm.reset();
          this.showMsg = true;
        },
        error => {
          this.msg = error;
        }
      );
  }
}
