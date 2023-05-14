/*

    TASK: 3 (#fundamentals)

    DESCRIPTION:

    This is a simple calculator.

    [done] TODO: 1# create a correct types. Consider a case:
        if variable you have only variable a, the algorithm should increment it. Block increment if you have two variable
        Handle the same case with b variable

    [done] TODO: 2# Use enum instead of string type
    [done] TODO: 3# Please refrain from modifying the code below and ensure that the interface is universally compatible.

 */


type SignsForOneDigit = "++" | "--";
type SignsForTwoDigits =  "+" | "-" | "*" | "/";

interface OneDigit {
    a: number | string;
    sign: SignsForOneDigit;
}
interface TwoDigits {
    a: number | string;
    b: number | string;
    sign: SignsForTwoDigits;
}

type CurrentType = OneDigit | TwoDigits

const addOp: CurrentType = {
    a: 1,
    b: 2,
    sign: '+',
};

const subOp: CurrentType = {
    a: 1,
    b: 2,
    sign: '-',
};

const mulOp: CurrentType = {
    a: '1',
    b: '2',
    sign: '*',
};

const divOp: CurrentType = {
    a: '1',
    b: '2',
    sign: '/',
};

const incOp: CurrentType = {
    a: 1,
    sign: '++',
};

const decOp: CurrentType = {
    a: 1,
    sign: '--',
};

// some function to run a code....


/*

########################

enum version

########################

 */

enum SignsForOneDigit2 {
    IncValue,
    DecValue,
}

enum SignsForTwoDigits2 {
    Add,
    Sub,
    Mul,
    Div,
};


interface OneDigit2 {
    a: number | string;
    sign: SignsForOneDigit2;
}
interface TwoDigits2 {
    a: number | string;
    b: number | string;
    sign: SignsForTwoDigits2;
}

type CurrentType2 = TwoDigits2 | OneDigit2

const a: CurrentType2 = {
    a: 1,
    b: 2,
    sign: SignsForTwoDigits2.Add,
};

const b: CurrentType2 = {
    a: 1,
    b: 2,
    sign: SignsForTwoDigits2.Sub,
};

const c: CurrentType2 = {
    a: '1',
    b: '2',
    sign: SignsForTwoDigits2.Mul,
};

const d: CurrentType2 = {
    a: '1',
    b: '2',
    sign: SignsForTwoDigits2.Div,
};

const e: CurrentType2 = {
    a: 1,
    sign: SignsForOneDigit2.IncValue,
};

const f: CurrentType2 = {
    a: 1,
    sign: SignsForOneDigit2.DecValue,
};

const calcTwoDigits = async ({a, b ,sign}: TwoDigits2) => {

    /*
        Ogólnie w obiektach zostały zahardcodowane wcześniej już znaki.
        Jednak, gdyby dane nie pochodziły z zapisanych wcześniej obiektów,
        warto dodać jeden argument sprawdzający, czy znak spełnia wymagania.

        OPIS argumentu:

        W kodzie użyto metody Object.values(), aby pobrać tablicę wszystkich
        wartości z enum type of SignsForTwoDigits2, a następnie sprawdzono,
        czy wartość sign znajduje się w tej tablicy za pomocą metody includes().

     */

    if(
        (a === "" || isNaN(Number(a))) && (b === "" || isNaN(Number(b))) ||
        (a === "" || isNaN(Number(a))) ||
        (b === "" || isNaN(Number(b)))
        // Object.values(SignsForTwoDigits2).includes(sign) [ chatGPT ]
    ) {
        await console.log("\n     Cannot read properties. The value provided for one or more properties is invalid");
        await console.log("     Please check the values of each property and try again\n");
        await process.exit(0);
    }

    await console.log("\n     Step 1: Preparing calculation....");

    await setTimeout(() => {
        console.log("\n     Step 2: Calculation done!");
    }, 2500);

    await setTimeout(() =>{
        console.log("\n     Step 3: Preparing results...!");
    },4000);

    await setTimeout(() =>{

        console.log("\n     Well Done!: Results below:\n");

    }, 7000);

    await setTimeout(() =>{

        switch (sign) {
            case SignsForTwoDigits2.Add:
                console.log(`     [Selected operation] Dodawanie:\n     Answer: [ ${a} + ${b} ] = ${Number(a) + Number(b)} `);
                break;
            case SignsForTwoDigits2.Sub:
                console.log(`     [Selected operation] Odejmowanie:\n     Answer: [ ${a} - ${b} ] = ${Number(a) - Number(b)}`);
                break;
            case SignsForTwoDigits2.Mul:
                console.log(`     [Selected operation] Mnożenie:\n     Answer: [ ${a} * ${b} ] = ${Number(a) * Number(b)}`);
                break;
            case SignsForTwoDigits2.Div:
                if(Number(b) !== 0){
                    console.log(`     [Selected operation] Dzielenie:\n     Answer: [ ${a} / ${b} ] = ${Number(a) / Number(b)}`);
                }else{
                    console.error("     Second value can not equal zero");
                }
                break;
            default:
                console.error("     Unknown user error. Please try again");
                break;
        }

    }, 7000);
}
calcTwoDigits(a).then(r => {});
