import { Component, OnInit, Inject } from '@angular/core';
import { Item } from '../../models/item.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    item: Item;
}

@Component({
    selector: 'app-item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {}
}
