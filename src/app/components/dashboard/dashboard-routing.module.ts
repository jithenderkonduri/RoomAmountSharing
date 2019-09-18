import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { Shell } from "../../shell/shell.service";

const routes: Routes = [
  Shell.childRoutes([
    { path: "", redirectTo: "/", pathMatch: "full" },
    {
      path: "dashboard",
      component: DashboardComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
