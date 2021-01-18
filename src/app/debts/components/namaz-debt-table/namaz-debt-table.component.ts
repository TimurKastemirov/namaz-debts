import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NamazesPerDay } from 'src/app/debts/models/namazes-per-day';

@Component({
    selector: 'app-namaz-debt-table',
    templateUrl: './namaz-debt-table.component.html',
    styleUrls: ['./namaz-debt-table.component.scss']
})
export class NamazDebtTableComponent implements OnInit, OnChanges {
    private SHAKE_TIME = 1000;
    areAllNamazesPerDayDoneList: boolean[];
    shakeClass: boolean[];

    @Input() namazes: NamazesPerDay[];
    @Output() toggle = new EventEmitter<NamazesPerDay>();

    private static setNamazesPerDay(namazesPerDay: NamazesPerDay, isDone: boolean): NamazesPerDay {
        for (const [key] of Object.entries(namazesPerDay)) {
            if (key !== 'date') {
                namazesPerDay[key] = isDone;
            }
        }

        return namazesPerDay;
    }

    private static areAllNamazesPerDayDone(namazesPerDay: NamazesPerDay): boolean {
        return Object.values(namazesPerDay).every(x => x);
    }

    constructor() {
    }

    ngOnInit(): void {
        this.initiateProps();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.namazes && changes.namazes.currentValue) {
            this.initiateProps();
        }
    }

    toggleAllNamazes(index) {
        const namazesPerDay = this.namazes[index];
        const areAllDone = NamazDebtTableComponent.areAllNamazesPerDayDone(namazesPerDay);
        this.namazes[index] = NamazDebtTableComponent.setNamazesPerDay(namazesPerDay, !areAllDone);
        this.shake(index);
        this.toggle.emit(namazesPerDay);
    }

    toggleOneNamaz(index) {
        setTimeout(() => {
            const namazesPerDay = this.namazes[index];
            const temp = this.areAllNamazesPerDayDoneList[index];
            this.areAllNamazesPerDayDoneList[index] = NamazDebtTableComponent.areAllNamazesPerDayDone(namazesPerDay);
            if (temp !== this.areAllNamazesPerDayDoneList[index]) {
                this.shake(index);
            }
            // save
            this.toggle.emit(namazesPerDay);
        }, 0); // use setTimeout because ngModel updates after method call
    }

    private shake(index: number): void {
        this.shakeClass[index] = true;
        setTimeout(() => {
            this.shakeClass[index] = false;
        }, this.SHAKE_TIME);
    }

    private initiateProps() {
        this.areAllNamazesPerDayDoneList = this.namazes
            .map(namazesPerDay => NamazDebtTableComponent.areAllNamazesPerDayDone(namazesPerDay));
        this.shakeClass = this.areAllNamazesPerDayDoneList.map(() => false);
    }
}
