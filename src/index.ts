/**
 * Index file that initiates the bootstrapping
 * of the application and sets it to production
 * mode if the environment is production.
 *
 * @module AppModule
 */ /** */
import 'core-js/client/shim';
import 'zone.js/dist/zone';

import '@angular/common';
import 'rxjs';

import './index.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/**
 * External process variable that contains the
 * Node environment. Is used to determine the environment
 * for which the build is being done.
 */
declare var process: any;

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity; // tslint:disable-line:no-string-literal
  require('zone.js/dist/long-stack-trace-zone'); // tslint:disable-line:no-var-requires
}

platformBrowserDynamic().bootstrapModule(AppModule);
