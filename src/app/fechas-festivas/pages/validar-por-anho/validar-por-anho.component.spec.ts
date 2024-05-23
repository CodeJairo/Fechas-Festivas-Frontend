import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPorAnhoComponent } from './validar-por-anho.component';

describe('ValidarPorAnhoComponent', () => {
  let component: ValidarPorAnhoComponent;
  let fixture: ComponentFixture<ValidarPorAnhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidarPorAnhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarPorAnhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
