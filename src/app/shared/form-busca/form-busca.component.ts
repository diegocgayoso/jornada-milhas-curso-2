import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Estado, Passageiros } from 'src/app/interfaces/types';
import { Observable, map, startWith } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit {


  buscaForm!: FormGroup;
  estados: Estado[] = [];
  estadosFiltrados!: Observable<Estado[]> | undefined;
  estadosFiltradosDestino!: Observable<Estado[]> | undefined;
  opcoesViagem!: any[];


  adultos!: number;
  criancas!: number;
  bebes!: number;
  categoria!: string;
  dadosPassageiros: Passageiros = {
    adultos: 0,
    criancas: 0,
    bebes: 0,
    categoria: 'Econômica'
  };

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private service: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscaForm = this.formBuilder.group({
      somenteida: [null],
      origem: [null],
      destino: [null],
      dataIda: [null],
      dataVolta: [null],
      pagina: [1],
      porPagina:[5]
    })
    this.getEstados();
    this.estadosFiltrados = this.buscaForm.get('origem')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarEstados(value))
    )
    this.estadosFiltradosDestino = this.buscaForm.get('destino')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarEstados(value))
    )

    this.opcoesViagem = this.getOpcoesViagem();
  }

  addPassageiros() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: this.dadosPassageiros
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.adultos = result.adultos
      // this.criancas = result.criancas
      // this.bebes = result.bebes
      // this.categoria = result.categoria
      this.dadosPassageiros = result;
      console.log(this.dadosPassageiros);

    })
  }

  buscar() {
    const formData = this.buscaForm.value;
    this.router.navigate(['busca'], {queryParams: formData});
  }

  getEstados() {
    this.service.buscarEstados()
      .subscribe(data => {
        this.estados = data;
      })
  }

  filtrarEstados(value: string): Estado[] {
    const valorFiltrado = value.toLowerCase();
    return this.estados.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
  }

  getOpcoesViagem() {
    return [
      {valor: true, desc: 'Somente ida'},
      {valor: false, desc: 'Ida e Volta'}
    ]
  }
}


