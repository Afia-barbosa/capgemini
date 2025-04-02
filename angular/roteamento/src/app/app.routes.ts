import { Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'primeira-pagina', component: PrimeiraPaginaComponent },
    { path: 'segunda-pagina', component:  SegundaPaginaComponent},
    { path: 'pagina-com-parametros/:id', component: PaginaComParametrosComponent},
    { path: 'pagina-protegida', component: PaginaProtegidaComponent, canActivate: [authGuard]},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent }
    
];
