import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Debt } from '../debt';

@Component({
  selector: 'app-debt-item',
  templateUrl: './debt-item.component.html',
  styleUrls: ['./debt-item.component.scss']
})
export class DebtItemComponent implements OnInit {
  @Input() id: number;
  @Input() item: Debt;
  @Output() delete = new EventEmitter<number>();
  @Output() detail = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  goToDetail(): void {
    this.detail.emit(this.id);
  }

  deleteItem(): void {
    this.delete.emit(this.id);
  }
}
