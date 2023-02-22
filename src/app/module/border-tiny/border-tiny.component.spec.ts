import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderTinyComponent } from './border-tiny.component';

describe('BorderTinyComponent', () => {
  let component: BorderTinyComponent;
  let fixture: ComponentFixture<BorderTinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BorderTinyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderTinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
