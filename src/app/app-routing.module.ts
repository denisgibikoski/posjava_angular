import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { GeneroComponent } from './genero/genero.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';


const routes: Routes = [
    { path: 'principal' , component: PrincipalComponent },
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'genero/new', component: GeneroComponent },
    { path: 'genero/:id', component: GeneroComponent },
    { path: 'genero', component: GeneroListaComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})

export class AppRoutingModule { }