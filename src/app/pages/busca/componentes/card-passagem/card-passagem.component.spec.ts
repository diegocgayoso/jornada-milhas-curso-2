import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPassagemComponent } from './card-passagem.component';

describe('CardPassagemComponent', () => {
  let component: CardPassagemComponent;
  let fixture: ComponentFixture<CardPassagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPassagemComponent]
    });
    fixture = TestBed.createComponent(CardPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
