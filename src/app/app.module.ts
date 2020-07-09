import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnchangeDemoComponent } from './onchange-demo/onchange-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    OnchangeDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
