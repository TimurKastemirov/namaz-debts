import { Component, OnInit } from '@angular/core';
import { Debt } from '../debt';

@Component({
  selector: 'app-debt-edit',
  templateUrl: './debt-edit.component.html',
  styleUrls: ['./debt-edit.component.scss']
})
export class DebtEditComponent implements OnInit {
  public debt: Debt;
  constructor() { }

  ngOnInit(): void {
  }

}
