import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReimbursementsRoutingModule } from "./reimbursements-routing.module";
import { ReimbursementsCreateComponent } from "./create/create.component";
import { ReimbursementsListComponent } from "./list/list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReimbursementsRoutingModule, ReactiveFormsModule],
  declarations: [ReimbursementsCreateComponent, ReimbursementsListComponent]
})
export class ReimbursementsModule {}
