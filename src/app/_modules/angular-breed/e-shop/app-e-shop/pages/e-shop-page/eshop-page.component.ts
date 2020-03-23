import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-eshop-page',
    templateUrl: './eshop-page.component.html',
    styleUrls: ['./eshop-page.component.scss']
})
export class EShopPageComponent<T> implements OnInit {
    itemsList$: Observable<T[]>;

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        this.itemsList$ = this.route.data.pipe(map(data => data.itemsList));
    }
}
