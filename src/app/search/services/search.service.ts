import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class SearchService {

    constructor(private http: HttpClient){}

}