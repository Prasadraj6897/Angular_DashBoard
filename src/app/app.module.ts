import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullWidthModule } from './layouts/full-width/full-width.module';



@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullWidthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
