import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../models/Section';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

    @Input() section: Section;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
    }

}
