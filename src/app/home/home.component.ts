import { Component, OnInit } from '@angular/core';
import { Section } from '../models/Section';
import { SubSection } from '../models/SubSection';
import { AppService } from '../app.service';
import 'rxjs/add/observable/throw';

declare var smoothScrollTo: any;
declare var scrollToSection: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public activeView: any;
    public sections: Array<Section> = [];
    public singleSection: Section;

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

            if (this.sections.length > 0) {
                this.singleSection = this.sections[0];
            }
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

    listNext(id) {
        let index = this.indexOfSection(id);
        if (index < this.sections.length - 1) {
            new scrollToSection(this.sections[index + 1].id);
        }
    }

    listPrevious(id) {
        let index = this.indexOfSection(id);
        if (index > 0) {
            new scrollToSection(this.sections[index - 1].id);
        }
    }

    indexOfSection(id) {
        let section = this.sections.find(x => x.id == id)
        return this.sections.indexOf(section);
    }

    singleNext() {
        let index = this.sections.indexOf(this.singleSection);
        if (index < this.sections.length - 1) {
            this.singleSection = this.sections[index + 1];
        }
    }

    singlePrevious() {
        let index = this.sections.indexOf(this.singleSection);
        if (index > 0) {
            this.singleSection = this.sections[index - 1];
        }
    }

    smoothScrollTo(yPos) {
        new smoothScrollTo(yPos);
    }
}