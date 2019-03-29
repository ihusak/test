import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpResponse, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AppService {

    constructor(private http: HttpClient){}
    getUser(): Observable<{}> {
        return this.http.get('http://localhost:3000/user')
            .map((resp: Response) => {
                return resp.json();
            })
            .catch((error: any) => {
                return Observable.throw(error.statusText);
            });
    }
}