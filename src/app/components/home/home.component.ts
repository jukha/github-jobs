import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  selectedCity: string = "";
  cities = [
    { label: "London", name: "london", value: "london" },
    { label: "Amsterdam", name: "amsterdam", value: "amsterdam" },
    { label: "New York", name: "new-york", value: "new-york" },
    { label: "Berlin", name: "berlin", value: "berlin" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
