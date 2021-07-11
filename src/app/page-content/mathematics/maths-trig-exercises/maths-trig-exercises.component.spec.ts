import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsTrigExercisesComponent } from './maths-trig-exercises.component';

describe('MathsTrigExercisesComponent', () => {
  let component: MathsTrigExercisesComponent;
  let fixture: ComponentFixture<MathsTrigExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsTrigExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsTrigExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
