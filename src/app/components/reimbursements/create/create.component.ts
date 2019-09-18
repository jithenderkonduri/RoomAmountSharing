import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReimbursementsService } from "../reimbursements.service";
import { UserService } from "../../users/users.service";
import { Users } from "../../users/users";
import { Reimbursements } from "../reimbursements";
import { first } from "rxjs/operators";

@Component({
  selector: "app-expenses",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class ReimbursementsCreateComponent implements OnInit {
  reimbursements: Reimbursements[];
  users: Users[];
  reimbursementsForm: FormGroup;
  msg: string = null;
  showMsg: boolean = false;
  constructor(
    private RefundService: ReimbursementsService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.reimbursementsForm = this.fb.group({
      user_id: ["", Validators.required],
      amount: ["", Validators.required]
    });
  }

  addReimbursements() {
    this.RefundService.addReimbursements(this.reimbursementsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.msg = "Reimbursements added successfully";
          this.reimbursementsForm.reset();
          this.showMsg = true;
        },
        error => {
          this.msg = error;
        }
      );
  }

  ngOnInit() {
    this.userService.getUser().subscribe(data => (this.users = data.result));
  }
}
