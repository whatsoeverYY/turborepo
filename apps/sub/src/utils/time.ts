import md5 from 'md5'
export function getTheDaysOfTheYear(year: number) {
    if (year % 400 === 0) {
        return 366
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return 366
    }
    console.log(md5(String(year)))
    return 365
}