import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'preventNull'
})
export class PreventNullPipe implements PipeTransform {
    transform(value: string): string {
        return !!value ? value : '';
    }
}
