import { Component, Input } from '@angular/core';
import { Promocoes } from 'src/app/interfaces/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input() promocao!: Promocoes;
}
