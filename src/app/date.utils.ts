export class DateUtils {
    static dateToStr(date: Date): string {
        const year = date.getFullYear();
        const month = this.leadZero(date.getMonth() + 1);
        const day = this.leadZero(date.getDate());
        return [year, month, day].join('-');
    }

    static strToDate(str: string): Date {
        if (this.isInvalidStrDate(str)) {
            throw new Error('date is invalid');
        }

        return new Date(str);
    }

    static isInvalidStrDate(str: string): boolean {
        return new Date(str).toString() === 'Invalid Date';
    }

    private static leadZero(num: number): string {
        const temp = num.toString(10);
        return temp.length > 1
            ? temp
            : '0' + temp;
    }
}
