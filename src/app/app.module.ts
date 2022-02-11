import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  NblocksIonicModule,
  AUTH_HTTP_INTERCEPTOR_PROVIDERS,
} from '@nebulr-group/nblocks-ionic';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NblocksIonicModule.forRoot({}),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AUTH_HTTP_INTERCEPTOR_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
