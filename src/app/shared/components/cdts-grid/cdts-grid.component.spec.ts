import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdtsGridComponent } from './cdts-grid.component';

describe('CdtsGridComponent', () => {
  let component: CdtsGridComponent;
  let fixture: ComponentFixture<CdtsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdtsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdtsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
