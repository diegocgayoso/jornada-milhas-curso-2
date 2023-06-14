import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Passageiros } from 'src/app/interfaces/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  passageirosAdultos!: number;
  passageirosCriancas!: number;
  passageirosBebes!: number;
  categoria!: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Passageiros
  ){}

  ngOnInit(): void {
    console.log(this.data)
  }

  passageiros: Passageiros = {
    adultos: 0,
    criancas: 0,
    bebes: 0,
    categoria: 'Econômica'
  };

  quantidadeAdultos(ev: number) {
    // this.log(ev)
    this.passageiros.adultos = ev;
  }

  quantidadeCriancas(ev: number) {
    this.passageiros.criancas = ev;
  }

  quantidadeBebes(ev: number) {
    this.passageiros.bebes = ev;
  }

  // mandandoDadosPassageiro() {
  //   this.dadosPassageiros.emit(this.passageiros);
  // }

  salvarDadosPassageiros(){
    // console.log(this.passageiros);
    this.dialogRef.close(this.passageiros);
  }

  log(valor: any){
    console.log('Passageiro',valor)
  }

  onClick(ev: any){
    this.passageiros.categoria = ev.value
  }
}
