import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from 'src/app/_modules/angular-seed/petshop/app-petshop-api';

@Pipe({
    name: 'preventNull'
})
export class PreventNullPipe implements PipeTransform {
    transform(value: Pet): Pet {
        return !!value ? value : { id: 0, name: '' };
    }
}
