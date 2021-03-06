import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { PrincipalComponent } from './principal/principal.component';
import { CardComponent } from './card/card.component';
import { BotaoComponent } from './botao/botao.component';
import { FotoComponent } from './foto/foto.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { GeneroComponent } from './genero/genero.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { GeneroService } from './genero/genero.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    PrincipalComponent,
    CardComponent,
    BotaoComponent,
    FotoComponent,
    GeneroComponent,
    GeneroListaComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
