import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  uiVersion: string = "?";
  coreVersion: String = "?";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.uiVersion = environment.version;
    this.getCoreVersion();
  }

  getUiVersion() {
    return environment.version;
  }

  getCoreVersion() {
    let url = environment.locationOrigin + "/api/about";
    this.http.get(url)
      .subscribe((data: any) =>
        this.coreVersion = data["version"]);
  }

}
