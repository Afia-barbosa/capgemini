import { Component } from '@angular/core';
import { celular } from '../types/celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-renderizando-listas',
  imports: [CommonModule],
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {
  celulares: celular[] = [
    {id: 1, nome: "Iphone de afia", descricao: "modelo 13", esgotado: false},
    {id: 2, nome: "Iphone de eli", descricao: "modelo 11", esgotado: false},
    {id: 3, nome: "Iphone de ana", descricao: "modelo 10  ", esgotado: true},
  ] 
}
