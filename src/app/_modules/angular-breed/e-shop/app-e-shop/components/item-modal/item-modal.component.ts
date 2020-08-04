import { Component, OnInit, Inject } from '@angular/core';
import { Item } from '../../models/item.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
    item: Item;
}

@Component({
    selector: 'app-item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public dialog: MatDialog,
        private router: Router
    ) {}

    ngOnInit(): void {}

    onDialogCartClick(): void {
        this.router.navigate(['/ecart']);
        this.dialog.closeAll();
    }
}
