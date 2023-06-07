import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { Depoimentos, Promocoes } from '../../interfaces/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promocoes!: Promocoes[];
  depoimentos!: Depoimentos[];
  constructor(
    private service: ApiService
  ) { }
  ngOnInit(): void {
    this.getPromocoes();
    this.getDepoimentos();
  }

  getPromocoes() {
    this.service.getPromocoes().subscribe(
      res => {
        this.promocoes = res;
      }
    )
  }
  getDepoimentos() {
    this.service.getDepoimentos().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }

  ngOnDestroy(): void {

  }
}


