import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  imports: [CommonModule, FormsModule],
  templateUrl: './exemplo-servicos2.component.html',
  styleUrl: './exemplo-servicos2.component.css',
})
export class ExemploServicos2Component {
  descricao = "";

  constructor(public logger: LoggerService ){}

  adicionarProduto(){
    this.logger.logar(`O nome ${this.descricao} foi adicionado`);
  }
}
