import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  readonly rootURL = "http://localhost:59701/api";

  constructor(private http: HttpClient) { }

  postAction(controllerName: string, actionName: string, body: any) {
    return this.http.post(this.rootURL + '/' + controllerName + '/' + actionName, body);
  }

  putAction(controllerName: string, body: any) {
    return this.http.put(this.rootURL + '/' + controllerName, body);
  }

  deleteAction(controllerName: string, actionName: string, id: number) {
    return this.http.delete(this.rootURL + '/' + controllerName + '/' + actionName + '/' + id);
  }

  getAction(controllerName: string) {
    return this.http.get(this.rootURL + '/' + controllerName);
  }

  getIdAction(controllerName: string, id: number) {
    return this.http.get(this.rootURL + '/' + controllerName + '/' + id);
  }
}
