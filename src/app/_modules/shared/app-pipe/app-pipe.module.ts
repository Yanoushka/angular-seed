import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreventNullPipe } from './pipes/prevent-null.pipe';

@NgModule({
    declarations: [PreventNullPipe],
    imports: [CommonModule],
    exports: [PreventNullPipe]
})
export class AppPipeModule {}
