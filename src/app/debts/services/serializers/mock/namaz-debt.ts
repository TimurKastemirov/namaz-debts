import { NamazDebtDTO } from 'src/app/debts/dto/namaz-debt';
import { mockNamazes, mockNamazesDTO } from 'src/app/debts/services/serializers/mock/namazes-per-day';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';

export const mockNamazDebtDTO: NamazDebtDTO = {
    date: {
        from: mockNamazesDTO[0].date,
        to: mockNamazesDTO[mockNamazesDTO.length - 1].date
    },
    namazes: mockNamazesDTO
};

export const mockNamazDebt: NamazDebt = {
    date: {
        from: mockNamazes[0].date,
        to: mockNamazes[mockNamazes.length - 1].date
    },
    namazes: mockNamazes
};
