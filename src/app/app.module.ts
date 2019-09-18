import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { HttpClientModule } from "@angular/common/http";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { UserModule } from "./components/users/user.module";
import { ExpensesModule } from "./components/expenses/expenses.module";
import { ReimbursementsModule } from "./components/reimbursements/reimbursements.module";
import { ShellModule } from "./shell/shell.module";

import { NavbarComponent } from "./components/navbar/navbar.component";

import { AppRoutingModule } from "../app-routing.module";
@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ShellModule,
    DashboardModule,
    UserModule,
    ExpensesModule,
    ReimbursementsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
