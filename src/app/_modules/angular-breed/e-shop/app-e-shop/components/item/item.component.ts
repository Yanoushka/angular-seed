import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/item.model';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent<T extends Item> implements OnInit {
    @Input() item: T;

    constructor(private readonly router: Router) {}

    ngOnInit(): void {}

    onDetails() {
        this.router.navigate([`/eshop/item/${this.item.id}`]);
    }
}
