import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pet-details-page',
    templateUrl: './pet-details-page.component.html',
    styleUrls: ['./pet-details-page.component.scss']
})
export class PetDetailsPageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('ici');
    }
}
