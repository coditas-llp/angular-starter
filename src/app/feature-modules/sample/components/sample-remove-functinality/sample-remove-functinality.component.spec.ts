import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRemoveFunctinalityComponent } from './sample-remove-functinality.component';

describe('SampleRemoveFunctinalityComponent', () => {
  let component: SampleRemoveFunctinalityComponent;
  let fixture: ComponentFixture<SampleRemoveFunctinalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRemoveFunctinalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRemoveFunctinalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
