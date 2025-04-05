import { Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

export const routes: Routes = [
    {path: 'produtos', loadChildren: () =>    import('./produtos/produtos.routes').then(m => m.produtosRoutes)},
    {path: '', redirectTo: "produtos", pathMatch: "full"},
    {path: '**', component: NaoEncontradoComponent}
];
