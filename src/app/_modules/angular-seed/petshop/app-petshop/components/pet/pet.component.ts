import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../../../../../__modules-swagger-codegen/app-petshop-api';
import { Router } from '@angular/router';
import { Item } from '../../../models/item.model';

@Component({
    selector: 'app-pet',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.scss']
})
export class PetComponent<T extends Item> implements OnInit {
    @Input() item: T;

    constructor(private readonly router: Router) {}

    ngOnInit(): void {}

    onDetails() {
        this.router.navigate([`/eshop/item/${this.item.id}`]);
    }
}
