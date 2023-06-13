import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
  valor = 0;
  @Output() valorPassagiero = new EventEmitter();

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
    this.valorPassagiero.emit(this.valor);
  }
}
