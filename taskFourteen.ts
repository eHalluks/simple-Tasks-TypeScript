/*

    TASK: 14 (#intermediate)

    DESCRIPTION: Create simple decorator and implement it

    [ done ] TODO: 1# try to count the result for 2+2
    [ done ] TODO: 2# use decorator

 */

function logSum(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value as (a: number, b: number) => number;

    descriptor.value = function (a: number, b: number) {
        const result = originalMethod.call(this, a, b);
        console.log(`Suma ${a} + ${b} = ${result}`);
        return result;
    };

    return descriptor;
}

class Calculator {
    @logSum
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
const result = calc.add(2, 2);
console.log(`Wynik: ${result}`);

