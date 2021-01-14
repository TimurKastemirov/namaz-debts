import { NamazesPerDayDTO } from 'src/app/debts/dto/namazes-per-day';

export interface NamazDebtDTO {
    id?: number;
    date: {
        from: string;
        to: string;
    };
    namazes: NamazesPerDayDTO[];
}
