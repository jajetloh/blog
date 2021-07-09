import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicsHomeComponent } from './mathematics-home.component';

describe('MathematicsHomeComponent', () => {
  let component: MathematicsHomeComponent;
  let fixture: ComponentFixture<MathematicsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathematicsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
