import { Injectable } from '@angular/core';
import { DebtApiService } from '../../api/debt.service';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { NamazDebtSerializerService } from 'src/app/debts/services/serializers/namaz-debt.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DebtService {

    constructor(
        private debtApiService: DebtApiService,
        private serializer: NamazDebtSerializerService
    ) {
    }

    getItem(id: number): Observable<NamazDebt> {
        return this.debtApiService.getItem(id)
            .pipe(
                map(dto => this.serializer.deserialize(dto)),
            );
    }

    getList() {
        return this.debtApiService.getList()
            .pipe(
                map(
                    listDTO => listDTO.map(
                        dto => this.serializer.deserialize(dto))
                ),
            );
    }

    create(item: NamazDebt) {
        const dto = this.serializer.serialize(item);
        return this.debtApiService.create(dto);
    }

    update(item: NamazDebt) {
        const dto = this.serializer.serialize(item);
        return this.debtApiService.update(dto);
    }

    delete(id: number) {
        return this.debtApiService.delete(id);
    }

    clearDebts() {
        return this.debtApiService.clearDebts();
    }
}
