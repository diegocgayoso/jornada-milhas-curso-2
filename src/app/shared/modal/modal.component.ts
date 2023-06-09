import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  passageirosAdultos: number = 0;
  passageirosCriancas: number = 0;
  passageirosBebes: number = 0;
  categoria: string = 'economica';

  // categoria

  passageiros = {
    adultos: this.passageirosAdultos,
    criancas: this.passageirosCriancas,
    bebes: this.passageirosBebes,
    categoria: this.categoria,
  };

  quantidadeAdultos(ev: number) {
    this.passageiros.adultos = ev;
  }

  quantidadeCriancas(ev: number) {
    this.passageiros.criancas = ev;
  }

  quantidadeBebes(ev: number) {
    this.passageiros.bebes = ev;
  }

  mandandoDadosPassageiro() {
    console.log(this.passageiros);
  }
}
