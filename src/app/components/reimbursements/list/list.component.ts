// index.component.ts

import { Component, OnInit } from "@angular/core";
import { ReimbursementsService } from "../reimbursements.service";
import { Reimbursements } from "../reimbursements";

@Component({
  selector: "app-index",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ReimbursementsListComponent implements OnInit {
  reimbursements: Reimbursements[];
  constructor(private refundservice: ReimbursementsService) {}
  ngOnInit() {
    this.refundservice
      .getReimbursements()
      .subscribe(data => (this.reimbursements = data.result));
  }
}
