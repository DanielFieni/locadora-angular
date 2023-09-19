import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorListComponent } from './diretor-list.component';

describe('DiretorListComponent', () => {
  let component: DiretorListComponent;
  let fixture: ComponentFixture<DiretorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretorListComponent]
    });
    fixture = TestBed.createComponent(DiretorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
