// adunit.service.ts

import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Expenses } from "./expenses";
import { APP_CONFIG, IAppConfig } from "../../config";

@Injectable({
  providedIn: "root"
})
export class ExpensesService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  addExpenses(expenses: Expenses) {
    return this.http.post(`${this.config.apiUrl}/expenses/create`, expenses);
  }
  getExpenses(): Observable<any> {
    return this.http.get(`${this.config.apiUrl}/expenses`);
  }
  deleteExpenses(id) {
    return this.http.get(`${this.config.apiUrl}/expenses/delete/${id}`);
  }
}
