import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AppComponent, 
    PrimeiraPaginaComponent 
  ],
})
export class AppModule { }
