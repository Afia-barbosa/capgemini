import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { PipeCustomizadoComponent } from "./pipe-customizado/pipe-customizado.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { RenderizandoListasComponent } from "./renderizando-listas/renderizando-listas.component";
import { ComponentePersonalizadoComponent } from "./componente-personalizado/componente-personalizado.component";
import { ComponenteFilhoComponent } from "./componente-filho/componente-filho.component";
import { ComponentePaiComponent } from "./componente-pai/componente-pai.component";
import { ExemploServicos1Component } from "./exemplo-servicos1/exemplo-servicos1.component";
import { ExemploServicos2Component } from "./exemplo-servicos2/exemplo-servicos2.component";
import { CicloDeVidaComponent } from "./ciclo-de-vida/ciclo-de-vida.component";
import { CicloDeVidaPaiComponent } from "./ciclo-de-vida-pai/ciclo-de-vida-pai.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    PrimeiroComponenteComponent,
    SegundoComponentComponent,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponenteFilhoComponent,
    ComponentePaiComponent,
    ExemploServicos1Component,
    ExemploServicos2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
