import { NamazesPerDayDTO } from 'src/app/debts/dto/namazes-per-day';
import { NamazesPerDay } from 'src/app/debts/models/namazes-per-day';

export const mockNamazesDTO: NamazesPerDayDTO[] = [
    {
        date: '2020-01-20',
        sabah: true,
        oyle: true,
        ekindi: true,
        akhsham: true,
        yatsi: true,
    },
    {
        date: '2020-01-21',
        sabah: false,
        oyle: false,
        ekindi: false,
        akhsham: false,
        yatsi: false,
    },
    {
        date: '2020-01-22',
        sabah: false,
        oyle: false,
        ekindi: false,
        akhsham: false,
        yatsi: false,
    },
    {
        date: '2020-01-23',
        sabah: true,
        oyle: true,
        ekindi: true,
        akhsham: true,
        yatsi: true,
    },
    {
        date: '2020-01-24',
        sabah: true,
        oyle: true,
        ekindi: true,
        akhsham: true,
        yatsi: true,
    }
];

export const mockNamazes: NamazesPerDay[] = [
    {
        date: new Date(mockNamazesDTO[0].date),
        sabah: true,
        oyle: true,
        ekindi: true,
        akhsham: true,
        yatsi: true,
    },
    {
        date: new Date(mockNamazesDTO[1].date),
        sabah: false,
        oyle: false,
        ekindi: false,
        akhsham: false,
        yatsi: false,
    },
    {
        date: new Date(mockNamazesDTO[2].date),
        sabah: false,
        oyle: false,
        ekindi: false,
        akhsham: false,
        yatsi: false,
    },
    {
        date: new Date(mockNamazesDTO[3].date),
        sabah: true,
        oyle: true,
        ekindi: true,
        akhsham: true,
        yatsi: true,
    },
    {
        date: new Date(mockNamazesDTO[4].date),
        sabah: true,
        oyle: true,
        ekindi: true,
        akhsham: true,
        yatsi: true,
    }
];
