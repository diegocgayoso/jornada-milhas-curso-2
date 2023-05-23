import { Component } from '@angular/core';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.scss']
})
export class DepoimentoComponent {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
