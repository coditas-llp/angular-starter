import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSmartComponent } from './sample-smart.component';

describe('SampleSmartComponent', () => {
  let component: SampleSmartComponent;
  let fixture: ComponentFixture<SampleSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleSmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
