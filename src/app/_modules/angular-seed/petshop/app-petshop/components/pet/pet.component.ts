import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../../app-petshop-api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pet',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
    @Input() pet: Pet;

    constructor(private readonly router: Router) {}

    ngOnInit(): void {}

    onDetails() {
        this.router.navigate([`/petshop/pet/${this.pet.id}`]);
    }
}
