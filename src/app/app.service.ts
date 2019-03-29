import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";

@Injectable()
export class AppService {

    constructor(private http: Http){}
    getUser(): Observable<{}> {
        return this.http.get('http://localhost:3000/user')
            .map((resp) => {
                return resp.json();
            })
            .catch((error: any) => {
                return Observable.throw(error.statusText);
            });
    }
}