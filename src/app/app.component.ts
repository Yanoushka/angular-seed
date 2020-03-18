import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './_modules/shared/app-logger/services/logger.service';

import { NGXLogger, NgxLoggerLevel } from 'ngx-logger';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-seed';

    constructor(
        translate: TranslateService,
        private readonly loggerService: LoggerService
    ) {
        translate.setDefaultLang('fr-FR');
        translate.use('fr-FR');
    }

    ngOnInit() {
        this.loggerService.updateConfig();
    }
}
