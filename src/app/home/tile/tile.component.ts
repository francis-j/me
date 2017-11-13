import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../models/Section';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { animFadeIn, animFadeOut } from '../../app-animations';

@Component({
    selector: 'tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
    animations: [
        trigger(
            "animation",
            [
                transition(
                    ":enter",
                    animFadeIn
                ),
                transition(
                    ":leave",
                    animFadeOut
                )
            ]
        )
    ]
})
export class TileComponent implements OnInit {

    @Input() section: Section;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
    }

    openModal() {
        let options:NgbModalOptions = { windowClass: "in" };
        const modal = this.modalService.open(ModalComponent, options);
        modal.componentInstance.section = this.section;
    }

}
