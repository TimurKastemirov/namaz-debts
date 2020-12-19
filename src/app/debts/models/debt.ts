import { Namaz } from './namaz';

export interface Debt {
  id?: number;
  date: {
    from: Date;
    to: Date;
  };
  namazes: Namaz[];
}
