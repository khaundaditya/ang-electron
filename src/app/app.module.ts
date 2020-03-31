import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxElectronModule, ElectronService } from 'ngx-electron';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule
  ],
  providers: [ AppService, ElectronService ],
  bootstrap: [AppComponent]
})

export class AppModule {}
