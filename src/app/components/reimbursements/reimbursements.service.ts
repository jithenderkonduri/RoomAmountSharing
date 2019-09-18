// adunit.service.ts

import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { APP_CONFIG, IAppConfig } from "../../config";

@Injectable({
  providedIn: "root"
})
export class ReimbursementsService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  addReimbursements(amountObj) {
    return this.http.post(
      `${this.config.apiUrl}/reimbursements/create`,
      amountObj
    );
  }
  getReimbursements(): Observable<any> {
    return this.http.get(`${this.config.apiUrl}/reimbursements`);
  }
}
