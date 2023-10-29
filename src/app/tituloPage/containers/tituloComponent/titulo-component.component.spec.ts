import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloComponent } from './titulo-component.component';

describe('ClasseComponent', () => {
  let component: TituloComponent;
  let fixture: ComponentFixture<TituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloComponent]
    });
    fixture = TestBed.createComponent(TituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
