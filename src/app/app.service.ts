import { Section } from "./models/Section";
import { Http, Response, Headers, RequestOptionsArgs } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class AppService {

    private headers: Headers = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json"
    });
    private options: RequestOptionsArgs = { headers: this.headers };

    constructor(private http: Http) { }

    getContents(): Observable<any> {
        return this.http
            .get(environment.api_url + "/section", this.options)
            .map(this.getBody)
            .catch(this.logError);
    }

    private getBody(res: Response) {
        let response = JSON.parse(JSON.stringify(res));
        let body = JSON.parse(response._body).data[0].sections;
        return res || {};
    }

    private logError(error: any) {
        console.error("Error", error);
        return Observable.throw(error);
    }
}