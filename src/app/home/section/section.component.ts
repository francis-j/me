import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../models/Section';

@Component({
    selector: 'section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

    @Input() section:Section;

    constructor() { }

    ngOnInit() {
    }

}
