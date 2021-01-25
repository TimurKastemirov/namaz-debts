import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { DateUtils } from 'src/app/date.utils';

@Injectable({
    providedIn: 'root'
})
export class UnavailableDateRangeValidatorService {
    constructor(
        private datePipe: DatePipe
    ) {
    }

    getValidator(dates: Array<{ from: Date, to: Date }>): ValidatorFn {
        return (control): ValidationErrors | null => {
            const errors = {} as ValidationErrors;
            let dateFrom = control.get('dateFrom').value;
            let dateTo = control.get('dateTo').value;

            if (dateFrom && dateTo) {
                // convert dates same as while saving to make correction with timezone
                dateFrom = DateUtils.strToDate(DateUtils.dateToStr(dateFrom));
                dateTo = DateUtils.strToDate(DateUtils.dateToStr(dateTo));
                for (const unavailableDate of dates) {
                    if (
                        ( dateFrom >= unavailableDate.from && dateFrom <= unavailableDate.to )
                        || ( dateTo >= unavailableDate.from && dateTo <= unavailableDate.to )
                        || ( dateFrom < unavailableDate.from && dateTo > unavailableDate.to )
                    ) {
                        errors.unavailableDateRange = {
                            message: `You already have debt
                         from ${this.datePipe.transform(unavailableDate.from)}
                          to ${this.datePipe.transform(unavailableDate.to)}`
                        };

                        break;
                    }
                }
            }

            return Object.values(errors).length > 0
                ? errors
                : null;
        };
    }
}
