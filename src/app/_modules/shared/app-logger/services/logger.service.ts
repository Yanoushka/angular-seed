import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';

import { NGXLogger, NgxLoggerLevel } from 'ngx-logger';
import { Subscription } from 'rxjs';

@Injectable()
export class LoggerService implements OnDestroy {
    ngxLogger: NGXLogger;

    sub: Subscription;

    constructor(private readonly http: HttpClient, logger: NGXLogger) {
        this.ngxLogger = logger;
    }

    public updateConfig() {
        this.sub = this.http
            .get('assets/config/logger.config.json')
            .subscribe(data => {
                this.ngxLogger.updateConfig({ level: this._formatData(data) });
            });
    }

    private _formatData(data: any): NgxLoggerLevel {
        switch (data.level) {
            case 'TRACE':
                return NgxLoggerLevel.TRACE;
            case 'DEBUG':
                return NgxLoggerLevel.DEBUG;
            case 'INFO':
                return NgxLoggerLevel.INFO;
            case 'LOG':
                return NgxLoggerLevel.LOG;
            case 'WARN':
                return NgxLoggerLevel.WARN;
            case 'ERROR':
                return NgxLoggerLevel.ERROR;
            case 'FATAL':
                return NgxLoggerLevel.FATAL;
            case 'OFF':
                return NgxLoggerLevel.OFF;
            default:
                return NgxLoggerLevel.OFF;
        }
    }

    ngOnDestroy() {
        if (this.sub !== undefined) {
            this.sub.unsubscribe();
        }
    }
}
