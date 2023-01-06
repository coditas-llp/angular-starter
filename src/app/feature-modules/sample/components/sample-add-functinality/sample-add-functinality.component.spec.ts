import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAddFunctinalityComponent } from './sample-add-functinality.component';

describe('SampleAddFunctinalityComponent', () => {
  let component: SampleAddFunctinalityComponent;
  let fixture: ComponentFixture<SampleAddFunctinalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleAddFunctinalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAddFunctinalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
