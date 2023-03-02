import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseURL =
    "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=fcb9c98e&app_key=31cc97eca829a07f958ac15b9209ce63";

  constructor() {}
}
