import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { postPetsList } from 'src/app/_modules/angular-seed/ngrx-store/app-ngrx-store/app-petshop-ngrx-store/actions/action';

@Component({
    selector: 'app-pet-controls',
    templateUrl: './pet-controls.component.html',
    styleUrls: ['./pet-controls.component.scss']
})
export class PetControlsComponent implements OnInit {
    @Input() petId: number;

    petNumber = 0;

    constructor(private readonly store: Store<{ petsList: Array<any> }>) {}

    ngOnInit(): void {}

    onAdd() {
        console.log('onClick()');
        this.store.dispatch(
            postPetsList({
                petsList: [{ name: 'labrador' }, { name: 'rotweiler' }]
            })
        );
    }

    onRemove() {}

    onAddToCart() {}
}
