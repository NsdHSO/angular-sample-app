import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderLargeComponent } from './border-large.component';

describe('BorderLargeComponent', () => {
  let component: BorderLargeComponent;
  let fixture: ComponentFixture<BorderLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BorderLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
