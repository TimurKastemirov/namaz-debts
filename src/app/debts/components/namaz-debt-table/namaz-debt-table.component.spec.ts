import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamazDebtTableComponent } from './namaz-debt-table.component';

describe('NamazDebtTableComponent', () => {
  let component: NamazDebtTableComponent;
  let fixture: ComponentFixture<NamazDebtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamazDebtTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamazDebtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
