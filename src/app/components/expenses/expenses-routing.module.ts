import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpensesCreateComponent } from "./create/create.component";
import { ExpensesListComponent } from "./list/list.component";
import { Shell } from "../../shell/shell.service";

const routes: Routes = [
  Shell.childRoutes([
    { path: "", redirectTo: "/", pathMatch: "full" },
    {
      path: "expenses/create",
      component: ExpensesCreateComponent
    },
    {
      path: "expenses",
      component: ExpensesListComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {}
