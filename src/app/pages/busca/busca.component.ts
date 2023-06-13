import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Passagem } from 'src/app/interfaces/types';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  resultados! : Passagem[];
  constructor(
    private route: ActivatedRoute,
    private service: ApiService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        console.log(params);
        this.service.buscarPassagens(params).subscribe(
          resultado => {
            this.resultados = resultado.resultado
            console.log(this.resultados);
          }
        )
      }
    )
  }
}
