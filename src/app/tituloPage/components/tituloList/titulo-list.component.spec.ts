import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloListComponent } from './titulo-list.component';

describe('TituloListComponent', () => {
  let component: TituloListComponent;
  let fixture: ComponentFixture<TituloListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloListComponent]
    });
    fixture = TestBed.createComponent(TituloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
