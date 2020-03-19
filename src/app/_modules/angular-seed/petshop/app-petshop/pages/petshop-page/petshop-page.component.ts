import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../../app-petshop-api';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-petshop-page',
    templateUrl: './petshop-page.component.html',
    styleUrls: ['./petshop-page.component.scss']
})
export class PetshopPageComponent implements OnInit {
    petsList$: Observable<Pet[]>;

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        this.petsList$ = this.route.data.pipe(map(data => data.petsList));
    }
}
