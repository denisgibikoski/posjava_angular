import { GeneroComponent } from './genero/genero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
    { path: 'principal' , component: PrincipalComponent },
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'genero/new', component: GeneroComponent },
    { path: 'genero/:id', component: GeneroComponent },
    { path: 'genero', component: GeneroComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})

export class AppRoutingModule { }
