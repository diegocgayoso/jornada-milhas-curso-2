import { Component } from '@angular/core';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss']
})
export class PrecosComponent {
  max = 500;
  min = 50;
  showTicks = true;
  step = 10;
  thumbLabel = true;
  value = 50;
}
