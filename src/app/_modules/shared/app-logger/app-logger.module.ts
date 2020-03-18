import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './services/logger.service';

@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class AppLoggerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppLoggerModule,
            providers: [LoggerService]
        };
    }
}
