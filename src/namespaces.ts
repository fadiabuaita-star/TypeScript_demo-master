namespace Validation {
  export class Number {
    static isNegative(value: number): boolean {
      return value < 0;
    }
    //
    static isPositive(value: number): boolean {
      return value > 0;
    }
    //
    static isNumber(value): boolean {
      return typeof parseInt(value) === "number";
    }
    //
    static isEven(value: number): boolean {
      return value % 2 === 0;
    }
    static isOdd(value: number): boolean {
      return !this.isEven(value);
    }
    static isAge(age: number) {
      return age > -1 && age < 120;
    }
  }
  //
  export function isValidEMail( email :string) {
  }
}
// console.log(Validation);
// console.log(Validation.Number.isEven(1));
// console.log(Validation.Number.isOdd(5));
// console.log(Validation.Number.isNegative(2));
// console.log(Validation.isValidEMail('idogmail.com'));

