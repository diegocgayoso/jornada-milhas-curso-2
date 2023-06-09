import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Estados, Passageiros } from 'src/app/interfaces/types';
import { Observable, Subscription, map, startWith } from 'rxjs';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit {

  buscaForm!: FormGroup;
  estados: Estados[] = [];
  estadosFiltrados!: Observable<Estados[]> | undefined;
  estadosFiltradosDestino!: Observable<Estados[]> | undefined;

  adultos!: number;
  criancas!: number;
  bebes!: number;
  categoria!: string;
  dadosPassageiros!: Passageiros;


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
      console.log(this.adultos, this.categoria);
    })
  }

  buscar() {
    console.log(this.buscaForm.value);
  }

  getEstados() {
    this.service.buscarEstados()
      .subscribe(data => {
        this.estados = data;
      })
  }

  filtrarEstados(value: string): Estados[] {
    const valorFiltrado = value.toLowerCase();
    return this.estados.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
  }
}
