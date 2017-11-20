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
            .map(this.mapBody)
            .catch(this.logError);
    }

    getContentsLocal(): Observable<any> {
        return this.http
            .get("assets/data.json")
            .map(this.mapBodyLocal)
            .catch(this.logError);
    }

    private mapBody
    (res: Response) {
        let response = JSON.parse(JSON.stringify(res));
        let body = JSON.parse(response._body).data[0];
        return body.sections || {};
    }

    private mapBodyLocal(res: Response) {
        let response = JSON.parse(JSON.stringify(res));
        let body = JSON.parse(response._body);
        return body.sections || {};
    }

    private logError(error: any) {
        console.error("Error", error);
        return Observable.throw(error);
    }
}