import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdtsFormComponent } from './cdts-form.component';

describe('CdtsFormComponent', () => {
  let component: CdtsFormComponent;
  let fixture: ComponentFixture<CdtsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdtsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdtsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
