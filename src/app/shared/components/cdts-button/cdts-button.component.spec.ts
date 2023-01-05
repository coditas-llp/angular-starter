import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdtsButtonComponent } from './cdts-button.component';

describe('CdtsButtonComponent', () => {
  let component: CdtsButtonComponent;
  let fixture: ComponentFixture<CdtsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdtsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdtsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
