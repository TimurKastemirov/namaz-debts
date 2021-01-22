import { NamazesPerDay } from 'src/app/debts/models/namazes-per-day';

export interface NamazDebt {
    id?: number;
    date: {
        from: Date;
        to: Date;
    };
    namazes: NamazesPerDay[];
}
