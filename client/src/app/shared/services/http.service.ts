import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from "rxjs/operators";

interface HttpOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  responseType?: 'json';
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public URL= "http://localhost:3000"

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.createUrl(url))
  }

  public put<T>(url: string, body: unknown | null, options?: HttpOptions): Observable<T> {
    return this.httpClient.put<T>(this.createUrl(url), body, options);
  }

  public post<T>(url: string, body: unknown | null, options?: HttpOptions): Observable<T> {
    return this.httpClient.post<T>(this.createUrl(url), body, options);
  }
  public delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.httpClient.delete<T>(this.createUrl(url), options);
  }

  private createUrl(url: string): string {
    return `${this.URL}/${url}`;
  }
}
