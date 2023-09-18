import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorListComponent } from './ator-list.component';

describe('AtorListComponent', () => {
  let component: AtorListComponent;
  let fixture: ComponentFixture<AtorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtorListComponent]
    });
    fixture = TestBed.createComponent(AtorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
