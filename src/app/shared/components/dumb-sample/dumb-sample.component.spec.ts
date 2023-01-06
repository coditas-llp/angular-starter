import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbSampleComponent } from './dumb-sample.component';

describe('DumbSampleComponent', () => {
  let component: DumbSampleComponent;
  let fixture: ComponentFixture<DumbSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
