import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';

@Component({
    selector: 'app-debt-item',
    templateUrl: './debt-item.component.html',
    styleUrls: ['./debt-item.component.scss']
})
export class DebtItemComponent implements OnInit {
    @Input() id: number;
    @Input() item: NamazDebt;
    @Output() delete = new EventEmitter<number>();
    @Output() detail = new EventEmitter<number>();
    public allDebtDays: number;
    public finishedDebtDays: number;
    public debtDays: number;
    public progress: number;

    constructor() {
    }

    ngOnInit(): void {
        this.allDebtDays = this.item.namazes.length;
        this.finishedDebtDays = this.item.namazes.filter(
            namazesPerDay => Object.values(namazesPerDay).every(x => x)
        ).length;
        this.debtDays = this.allDebtDays - this.finishedDebtDays;
        this.progress = this.finishedDebtDays / this.allDebtDays;
    }

    goToDetail(): void {
        this.detail.emit(this.id);
    }

    deleteItem(): void {
        this.delete.emit(this.id);
    }
}
