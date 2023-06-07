import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Estados } from 'src/app/interfaces/types';
import { Observable, Subscription, map, startWith } from 'rxjs';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit{

  buscaForm!: FormGroup;
  estados : Estados[] = [];
  estadosFiltrados! : Observable<Estados[]> | undefined;
  estadosFiltradosDestino! : Observable<Estados[]> | undefined;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private service: ApiService
  ) {}

  ngOnInit(): void {
      this.buscaForm = this.formBuilder.group({
        somenteida: [],
        origemControl: [],
        destinoControl: [],
        ida: [],
        volta: []
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
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }

  buscar() {
    console.log(this.buscaForm.value);
  }

  getEstados(){
    this.service.buscarEstados()
      .subscribe(data => {
        this.estados = data;
        console.log(this.estados);
      })
  }

  filtrarEstados(value: string): Estados[]{
    const valorFiltrado = value.toLowerCase();

    return this.estados.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
  }
}
