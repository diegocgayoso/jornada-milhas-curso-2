import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Passageiros } from 'src/app/interfaces/types';

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

  @Output() dadosPassageiros = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Passageiros
  ){

  }

  passageiros: Passageiros = {
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
    this.dadosPassageiros.emit(this.passageiros);
  }

  salvarDadosPassageiros(){
    this.dialogRef.close(this.passageiros);
  }
}
