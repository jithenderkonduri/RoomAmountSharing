import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserCreateComponent } from "./create/create.component";
import { UserListComponent } from "./list/list.component";
import { Shell } from "../../shell/shell.service";

const routes: Routes = [
  Shell.childRoutes([
    { path: "", redirectTo: "/", pathMatch: "full" },
    {
      path: "users/create",
      component: UserCreateComponent
    },
    {
      path: "users",
      component: UserListComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {}
