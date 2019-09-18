import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ExpensesService } from "../expenses.service";
import { Expenses } from "../expenses";
import { UserService } from "../../users/users.service";
import { Users } from "../../users/users";
import { first } from "rxjs/operators";

@Component({
  selector: "app-expenses",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class ExpensesCreateComponent implements OnInit {
  users: Users[];
  expensesForm: FormGroup;
  msg: string = null;
  showMsg: boolean = false;
  expenses: Expenses[];
  constructor(
    private ExpensivesService: ExpensesService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.expensesForm = this.fb.group({
      user_id: ["", Validators.required],
      amount: ["", Validators.required],
      date: ["", Validators.required]
    });
  }

  addExpenses() {
    this.ExpensivesService.addExpenses(this.expensesForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.msg = "User Create successfully";
          this.expensesForm.reset();
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
