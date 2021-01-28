import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDebtsDialogComponent } from './import-debts-dialog.component';

describe('ImportDebtsDialogComponent', () => {
  let component: ImportDebtsDialogComponent;
  let fixture: ComponentFixture<ImportDebtsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDebtsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDebtsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
