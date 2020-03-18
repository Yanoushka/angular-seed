import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../../app-petshop-api';

@Component({
    selector: 'app-pet',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
    @Input() pet: Pet;

    constructor() {}

    ngOnInit(): void {}
}
