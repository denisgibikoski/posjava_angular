import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
 @Input() url: string;
 @Input() classe: string;
  constructor() { }

  ngOnInit() {
  }

}
