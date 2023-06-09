import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  valor = 0;
  @Output() valorPassagiero = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

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
