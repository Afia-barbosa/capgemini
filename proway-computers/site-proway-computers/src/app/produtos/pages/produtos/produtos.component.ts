import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduto, produtos} from '../../../produtos';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-produtos',
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] = produtos;

}
