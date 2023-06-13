import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ApiService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        console.log(params);
        this.service.buscarPassagens(params).subscribe(
          resultado => console.log(resultado)
        )
      }
    )
  }
}
