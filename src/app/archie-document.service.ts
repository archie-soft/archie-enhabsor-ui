import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from '../environments/environment';
import { ArchieDoc } from "./model/archie-doc";
import { ImportAttributes } from "./model/import-attributes";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};


@Injectable({
  providedIn: 'root'
})
export class ArchieDocumentService {

  private docsUrl: string;
  private exportUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.docsUrl = environment.locationOrigin + "/docs?wt=json&indent=on";
    this.exportUrl = environment.locationOrigin + "/docs?wt=csv";
    this.apiUrl = environment.locationOrigin + "/api/rest";
  }

  getDcTypes(): Observable<any> {
    let url = this.docsUrl + "&q=*:*&fl=id&facet=on&facet.field=dcType";
    return this.http
      .get<any>(url)
      .pipe(catchError(this.handleError("getSummary", [])));
  }

  getDcCreators(): Observable<any> {
    let url =
      this.docsUrl +
      "&q=*:*&fl=id&facet=on&facet.field=dcCreator&facet.sort=index&facet.limit=1000000";
    return this.http
      .get<any>(url)
      .pipe(catchError(this.handleError("getCreators", [])));
  }

  getSearchResults(
    searchParams: string,
    start: number,
    rows: number
  ): Observable<any> {
    let url =
      this.docsUrl +
      "&q.op=AND&" +
      searchParams +
      "&fl=id,dcTitle,dcDate,dcCreator,dcDescription,dcFormat,dcAccessRights" +
      "&start=" +
      (start - 1) +
      "&rows=" +
      rows;
    console.log(url);
    return this.http
      .get<any>(url)
      .pipe(catchError(this.handleError("getSearchResults", [])));
  }

  deleteDocument(id: string): Observable<any> {
    let url = this.apiUrl + "/docs/delete/" + id;
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError("deleteDocument", [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
