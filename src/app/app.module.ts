import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule

import { AppComponent } from './app.component';
import { AirComponent } from './air/air.component';

@NgModule({
  declarations: [
    AppComponent,
    AirComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Agrega el módulo HttpClientModule a la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
