import { InjectionToken } from "@angular/core";

export interface Config {
  apiUrl: string;
}

export const AppConfig: Config = {
  apiUrl: "http://localhost:8887"
};

export const APP_CONFIG = new InjectionToken<Config>("app.config", {
  providedIn: "root",
  factory: () => AppConfig
});
