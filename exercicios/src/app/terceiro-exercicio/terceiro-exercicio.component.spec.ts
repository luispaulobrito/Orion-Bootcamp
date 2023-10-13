import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroExercicioComponent } from './terceiro-exercicio.component';

describe('TerceiroExercicioComponent', () => {
  let component: TerceiroExercicioComponent;
  let fixture: ComponentFixture<TerceiroExercicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerceiroExercicioComponent]
    });
    fixture = TestBed.createComponent(TerceiroExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
