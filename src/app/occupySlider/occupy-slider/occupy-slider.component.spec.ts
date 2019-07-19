import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupySliderComponent } from './occupy-slider.component';

describe('OccupySliderComponent', () => {
  let component: OccupySliderComponent;
  let fixture: ComponentFixture<OccupySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
