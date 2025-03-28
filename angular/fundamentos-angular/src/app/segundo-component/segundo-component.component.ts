import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segundo-component',
  imports: [CommonModule],
  templateUrl: './segundo-component.component.html',
  styleUrl: './segundo-component.component.css'
})
export class SegundoComponentComponent {
  nome = "áfia";
  dataNascimento =  new Date(2002, 10, 6);;
  urlImagem = "/joao.jpeg";

  mostrarDataNascimento(){
    alert(`A data de nascimento do João é: ${this.dataNascimento.toLocaleDateString("pt-BR")}`);
  }
}
