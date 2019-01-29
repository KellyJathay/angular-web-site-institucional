import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './view/quem-somos/quem-somos.component';
import { ContatoComponent } from './view/contato/contato.component';
import { NossaVisaoComponent } from './view/nossa-visao/nossa-visao.component';



@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    ContatoComponent,
    NossaVisaoComponent
  ],
  imports: [
    BrowserModule,
  //  HttpModule,
    //HttpClient,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
