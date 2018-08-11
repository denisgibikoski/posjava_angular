import { Component, OnInit } from '@angular/core';
import { Genero } from '../model/genero';
import { GeneroService } from '../genero/genero.service';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {

  titulo = "Gênero - Lista"
  generos: Genero[];

  constructor(private generoService : GeneroService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.generoService.findAll().subscribe(e => this.generos = e);
  }

}