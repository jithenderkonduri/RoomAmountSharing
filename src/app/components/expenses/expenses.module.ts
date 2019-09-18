import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./expenses-routing.module";
import { ExpensesCreateComponent } from "./create/create.component";
import { ExpensesListComponent } from "./list/list.component";
import { ExpensesService } from "./expenses.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
  declarations: [ExpensesCreateComponent, ExpensesListComponent]
})
export class ExpensesModule {}
