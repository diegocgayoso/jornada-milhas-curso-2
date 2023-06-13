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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.infoPassagem);

  }
}
