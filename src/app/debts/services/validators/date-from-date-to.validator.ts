import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateFromDateToValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const dateFrom = control.get('dateFrom').value as Date;
        const dateTo = control.get('dateTo').value as Date;
        if (dateFrom && dateTo) {
            if (dateFrom.getTime() - dateTo.getTime() >= 0) {
                return {
                    dateFromDateTo: {
                        message: '"Date to" must be greater than "Date from"'
                    },
                };
            }
        }

        return null;
    };
}
