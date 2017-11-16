import { Component, OnInit } from '@angular/core';
import { Section } from '../models/Section';
import { SubSection } from '../models/SubSection';
import { AppService } from '../app.service';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public activeView: any;
    public sections: Array<Section> = [];

    constructor(private service: AppService) { }

    ngOnInit() {
        this.activeView = 0;
        this.getResume();
    }

    private getResume() {
        var sections = this.service
            .getContents()
            .subscribe(
            response => this.processResponse(response),
            error => this.displayError(error)
            );
    }

    private processResponse(response: Response) {
        if (response.status == 200) {
            var object: any = Object.assign([], response.json());
            this.sections = object.data[0].sections;
        }
        else {
            this.displayError(response.statusText);
        }
    }

    private displayError(error) {
        var errorSection = new Section("An error has occurred.", [error], null);
        this.sections = [errorSection];
    }

    changeView(id: any) {
        this.activeView = id;
    }
}