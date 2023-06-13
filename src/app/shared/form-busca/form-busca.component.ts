import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Estado, Passageiros } from 'src/app/interfaces/types';
import { Observable, map, startWith } from 'rxjs';
import { formatDate } from '@angular/common';
import { HttpParams } from '@angular/common/http';

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

  adultos!: number;
  criancas!: number;
  bebes!: number;
  categoria!: string;
  dadosPassageiros!: Passageiros;

  idaData!: string;


  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.buscaForm = this.formBuilder.group({
      somenteida: [],
      origemControl: [],
      destinoControl: [],
      idaData: [],
      voltaData: []
    })
    this.getEstados();
    this.estadosFiltrados = this.buscaForm.get('origemControl')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarEstados(value))
    )
    this.estadosFiltradosDestino = this.buscaForm.get('destinoControl')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarEstados(value))
    )
    this.getData();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {
        adultos: this.adultos,
        criancas: this.criancas,
        bebes: this.bebes,
        categoria: this.categoria
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.adultos = result.adultos
      this.criancas = result.criancas
      this.bebes = result.bebes
      this.categoria = result.categoria
    })
  }

  buscar() {
    console.log(this.buscaForm.value);
    // const search = this.transformarFormsEmString();
    // console.log(this.dadosPassageiros);
    // const search = ''
    const dadosParaBusca = this.getData();
    this.service.buscarPassagens(dadosParaBusca).subscribe(res => console.log(res))
  }

  hidratandoData() {
    const data = new Date(this.buscaForm.get('idaData')?.value);
    const novaData = data.toISOString();
    console.log(novaData);
    return novaData
  }

  getEstados() {
    this.service.buscarEstados()
      .subscribe(data => {
        this.estados = data;
      })
  }

  // getIdEstado() {
  //   const idEncontrado = array
  //     .filter(obj => obj.nome === nomeProcurado)
  //     .map(obj => obj.id);
  // }


  filtrarEstados(value: string): Estado[] {
    const valorFiltrado = value.toLowerCase();
    return this.estados.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
  }

  getData() {
    let params = new HttpParams();

    params = params.append('dataIda', this.hidratandoData());
    params = params.append('pagina', 1)
    params = params.append('porPagina', 5);
    console.log(params.toString());
    return params
  }
  // transformarFormsEmString(){
  //   const idaData = this.hidratandoData();
  //   let search = `?somenteIda=false&passageirosAdultos=${this.adultos}&passageirosCriancas=${this.criancas}&tipo=${this.categoria}&origemId=0&destinoId=1&dataIda=${idaData}&pagina=1&porPagina=5`
  //   console.log(search);

  //   return search
  //}
}


