import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { APP_CONFIG, IAppConfig } from "../../config";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  getUsersTotal(): Observable<any> {
    return this.http.get(`${this.config.apiUrl}/dashboard/users-total`);
  }
  getExpensesTotal(): Observable<any> {
    return this.http.get(`${this.config.apiUrl}/dashboard/expenses-total`);
  }
  getExpensess(): Observable<any> {
    return this.http.get(`${this.config.apiUrl}/dashboard/final-payments`);
  }
}
