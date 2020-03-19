import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { postPetsList } from 'src/app/_modules/angular-seed/ngrx-store/app-ngrx-store/app-petshop-ngrx-store/actions/action';
import { Pet } from '../../../app-petshop-api';

@Component({
    selector: 'app-pet-controls',
    templateUrl: './pet-controls.component.html',
    styleUrls: ['./pet-controls.component.scss']
})
export class PetControlsComponent implements OnInit {
    @Input() petId: number;

    petNumber = 0;

    constructor(private readonly store: Store<{ petsList: Array<Pet[]> }>) {}

    ngOnInit(): void {}

    onIncrement() {
        if (this.petNumber < 5) {
            this.petNumber++;
        }
        console.log(this.petId);
    }

    onDecrement() {
        if (this.petNumber > 0) {
            this.petNumber--;
        }
    }

    onAddToCart() {
        this.store.dispatch(
            postPetsList({
                petsList: [{ name: 'labrador' }, { name: 'rotweiler' }]
            })
        );
    }
}
