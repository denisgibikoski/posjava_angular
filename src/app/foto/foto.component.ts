import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})

export class FotoComponent implements OnInit {
titulo: string;
@Input() imagem: string;
@Input() classe: string;
url: string = 'assets/img/'

  constructor() { }

  ngOnInit() {
  }

}
