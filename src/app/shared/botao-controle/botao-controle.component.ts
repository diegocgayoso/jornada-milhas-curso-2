import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent {
  @Input()  valor: number = 0;
  @Output() valorPassageiro = new EventEmitter();

  incrementar() {
    if (this.valor >= 0 && this.valor < 10) {
      this.valor++;
      this.emitir();
    }
  }

  decrementar() {
    if (this.valor > 0 && this.valor <= 10) {
      this.valor--;
      this.emitir();
    }
  }

  emitir() {
    this.valorPassageiro.emit(this.valor);
  }
}
