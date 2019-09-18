import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";

import { UserService } from "./../users/users.service";
import { Users } from "./../users/users";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  usersTotal: any;
  totalAmount: any;
  expenses: any;
  users: Users[];
  constructor(
    private dashboardService: DashboardService,
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.dashboardService.getUsersTotal().subscribe(data => {
      this.usersTotal = data.result[0].usersTotal;
    });

    this.dashboardService.getExpensesTotal().subscribe(data => {
      this.totalAmount = data.result[0].totalAmount;
    });
    this.dashboardService.getExpensess().subscribe(data => {
      console.log(data.result);
      this.expenses = data.result;
    });
    this.userservice.getUser().subscribe(data => {
      this.users = data.result;
    });
  }
  getUserName(user_id) {
    let userName = this.users.filter(c => c._id === user_id);
    return userName[0].name;
  }
}
