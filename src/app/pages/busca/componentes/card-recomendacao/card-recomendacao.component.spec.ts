import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecomendacaoComponent } from './card-recomendacao.component';

describe('CardRecomendacaoComponent', () => {
  let component: CardRecomendacaoComponent;
  let fixture: ComponentFixture<CardRecomendacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRecomendacaoComponent]
    });
    fixture = TestBed.createComponent(CardRecomendacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
