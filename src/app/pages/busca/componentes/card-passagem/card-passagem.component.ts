import { Component, Input } from '@angular/core';

import { Passagem } from 'src/app/interfaces/types';

@Component({
  selector: 'app-card-passagem',
  templateUrl: './card-passagem.component.html',
  styleUrls: ['./card-passagem.component.scss']
})
export class CardPassagemComponent {
  @Input() infoPassagem! : Passagem;
  constructor(){}

  ngOnInit(): void {
    console.log(this.infoPassagem);
  }
}
