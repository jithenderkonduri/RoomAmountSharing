import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserCreateComponent } from "./create/create.component";
import { UserListComponent } from "./list/list.component";
import { UserService } from "./users.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
  declarations: [UserCreateComponent, UserListComponent]
})
export class UserModule {}
