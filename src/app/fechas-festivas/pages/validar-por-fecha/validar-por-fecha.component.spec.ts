import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPorFechaComponent } from './validar-por-fecha.component';

describe('ValidarPorFechaComponent', () => {
  let component: ValidarPorFechaComponent;
  let fixture: ComponentFixture<ValidarPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidarPorFechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
