import { Component, OnInit } from '@angular/core';
import { Section } from '../../../models/Section';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'tile-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    public section: Section;

    constructor(private activeModal:NgbActiveModal) { }

    ngOnInit() {
    }

    close() {
        this.activeModal.dismiss();
    }

}
