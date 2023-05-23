import { ModalComponent } from './../../../../shared/modal/modal.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

  constructor(private dialog: MatDialog) {}

  abrirDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '60%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('Aplicar foi clicado');
    //   } else {
    //     console.log('Cancelar foi clicado');
    //   }
    // });
  }

}
