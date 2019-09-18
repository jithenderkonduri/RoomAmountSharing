// index.component.ts

import { Component, OnInit } from "@angular/core";
import { Expenses } from "../expenses";
import { ExpensesService } from "../expenses.service";

@Component({
  selector: "app-index",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ExpensesListComponent implements OnInit {
  expenses: Expenses[];

  constructor(private expensivesservice: ExpensesService) {}
  ngOnInit() {
    this.expensivesservice
      .getExpenses()
      .subscribe(data => (this.expenses = data.result));
  }

  deleteExpenses(id) {
    this.expensivesservice.deleteExpenses(id).subscribe(res => {
      this.expensivesservice
        .getExpenses()
        .subscribe(data => (this.expenses = data.result));
    });
  }
}
