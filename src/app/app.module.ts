import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContComponentComponent } from './components/cont-component/cont-component.component';
import { ServicosComponent } from './compservicos/servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContComponentComponent,
    ServicosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
