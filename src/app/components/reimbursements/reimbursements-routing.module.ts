import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReimbursementsCreateComponent } from "./create/create.component";
import { ReimbursementsListComponent } from "./list/list.component";
import { Shell } from "../../shell/shell.service";

const routes: Routes = [
  Shell.childRoutes([
    { path: "", redirectTo: "/", pathMatch: "full" },
    {
      path: "reimbursements/create",
      component: ReimbursementsCreateComponent
    },
    {
      path: "reimbursements",
      component: ReimbursementsListComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReimbursementsRoutingModule {}
