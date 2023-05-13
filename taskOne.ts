/*

    TASK: 1 (#fundamentals)

    DESCRIPTION:

    This is a function returns a price with VAT and currency.
    The user can add additional price. The price should return,
    with selected currency and recalculated on default currency.
    The select currency should presenting at price but the default currency,
    should presenting at selected currency in brackets. This is a pattern:

    Selected Product [ Buty ]
    Selected USD [ exemplary value ];
    USD = 3,24 [ exemplary value ];
    PRODUCT COST: 200 [ exemplary value ];
    PRESENTING PRICE WITH VAT: 797,04 USD GROSS ( 246 PLN BRUTTO ) [ calculation ];

    PRICE ATTRIBUTES:

    NET PRODUCT VALUE: 648 USD;
    GROSS: 149,04 USD;
    TOTAL: 797, 04 USD;

    FOR DEFAULT CURRENCY:
    CENA NETTO: 200 PLN;
    PODATEK VAT: 46 PLN;
    ŁĄCZNIE: 246 PLN;

    END PATTER:

    [done] TODO: #1 Create a terminal communication async function,
    [done] TODO: #2 Correct the function compute(),
    [done] TODO: #3 Handle case with default or the most occurs tax value && currency,
    [done] TODO: #4 Write a unit test to a compute function,
    [done] TODO: #5 Validate data,

 */


import { v4 as uuid } from 'uuid';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        readline.question(question, (answer: string) => {
            resolve(answer);
        });
    });
}

interface salesAttributes {
    id: string;
    name: string;
    price: number;
}

class SaleObject implements salesAttributes{

    id: string = uuid();
    name: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


let selectedProduct: string  = "";
let selectedCurrency: string = "";
let stringToPrint: string = "";
const productArr: SaleObject[] = [];
const currencyArr: SaleObject[] = [];

let priceWithCurrency: number = 0;
let taxForCurrencyPrice: number = 0;
let totalCurrencyPrice: number = 0;
let totalEuroPrice: number = 0;
let totalUSDPrice: number = 0;
let defaultCurrencyPrice: number = 0;
let taxForDefaultCurrencyPrice: number = 0;
let grossDefaultCurrencyPrice: number = 0;
const tax: number = 0.23;

let newProduct: SaleObject = new SaleObject(uuid(), "Buty", 350);
productArr.push(newProduct);
newProduct = new SaleObject(uuid(), "Plecak", 50);
productArr.push(newProduct);
newProduct = new SaleObject(uuid(), "Kurtka", 1000);
productArr.push(newProduct);

let newCurrency: SaleObject = new SaleObject(uuid(), "USD", 3.24);
currencyArr.push(newCurrency);
newCurrency = new SaleObject(uuid(), "EURO", 5.20);
currencyArr.push(newCurrency);
newCurrency = new SaleObject(uuid(), "PLN", 0);
currencyArr.push(newCurrency);

const validAnswer = async (valueToCheck: string) => {

    if (!valueToCheck) {
        console.log("\n   Nie wprowadzono żadnej wartości.");
        process.exit(0);
    }else if(Number(valueToCheck) === 0){
        console.log(`\n   Dziękujemy i zapraszamy ponownie!\n`);
        process.exit(0);
    }else if(!['a', 'b', 'c'].includes(valueToCheck.trim().toLowerCase())){
        console.log("\n  Wprowadzona wartość jest nieprawidłowa.");
        process.exit(0);
    }

}
const totalCalculation = async (selectedProduct: string,selectedCurrency: string) => {

    let selectedProductToFind: string = selectedProduct;
    let selectedCurrencyToFind: string = selectedCurrency;
    const tempArr: SaleObject[] = [];

    if(selectedProductToFind === "a"){

        productArr.forEach(product => {
            if(product.name === "Buty"){
                tempArr.push(product);
            }
        })

    }else if(selectedProductToFind === "b"){

        productArr.forEach(product => {
            if(product.name === "Plecak"){
                tempArr.push(product);
            }
        })

    }else if(selectedProductToFind === "c"){

        productArr.forEach(product => {
            if(product.name === "Kurtka"){
                tempArr.push(product);
            }
        })

    }

    if(selectedCurrencyToFind === "a"){

        currencyArr.forEach(currency => {
            if(currency.name === "USD"){
                tempArr.push(currency);
            }
        })

    }else if(selectedCurrencyToFind === "b"){

        currencyArr.forEach(currency => {
            if(currency.name === "EURO"){
                tempArr.push(currency);
            }
        })

    }else if(selectedCurrencyToFind === "c"){

        currencyArr.forEach(currency => {
            if(currency.name === "PLN"){
                tempArr.push(currency);
            }
        })

    }

    if(tempArr[1].name !== "PLN") {

        // cena po przeliczeniu na walutę
        priceWithCurrency = tempArr[0].price * tempArr[1].price;
        priceWithCurrency.toFixed(2);

        // podatek VAT od ceny przeliczonej na inną walutę
        taxForCurrencyPrice = priceWithCurrency * tax;
        taxForCurrencyPrice.toFixed(2);

        // cena po przeliczeniu na walutę z podatkiem VAT
        totalCurrencyPrice = priceWithCurrency + taxForCurrencyPrice;
        totalCurrencyPrice.toFixed(2);

        //cena podstawowa
        defaultCurrencyPrice = tempArr[0].price;
        defaultCurrencyPrice.toFixed(2);

        //podatek VAT od ceny bez przeliczenia na inną walutę
        taxForDefaultCurrencyPrice = defaultCurrencyPrice * tax;
        taxForDefaultCurrencyPrice.toFixed(2);

        //cena podstawowa z podatkiem VAT
        grossDefaultCurrencyPrice = defaultCurrencyPrice + taxForDefaultCurrencyPrice;
        grossDefaultCurrencyPrice.toFixed(2);

        return stringToPrint =
            "\n" +
            `    Wybrany produkt: ${tempArr[0].name},\n` +
            `    Wybrana waluta: ${tempArr[1].name},\n` +
            `    Aktualny kurs ${tempArr[1].name}: ${tempArr[1].price},\n` +
            `    Koszt produktu netto: ${priceWithCurrency},\n` +
            `    Koszt całkowity zamówienia brutto: ${totalCurrencyPrice}\n` +
            "\n" +
            "    Na cenę składa się:\n" +
            "\n" +
            `    Wartość netto po przeliczeniu na ${tempArr[1].name}: ${priceWithCurrency},\n` +
            `    Podatek VAT: ${taxForCurrencyPrice},\n` +
            `    Łącznie: ${totalCurrencyPrice},\n` +
            "\n" +
            `    Cena w złotówkach: ${grossDefaultCurrencyPrice},\n` +
            `    Cena netto: ${defaultCurrencyPrice},\n` +
            `    Podatek VAT: ${taxForDefaultCurrencyPrice},\n` +
            `    Łącznie do zapłaty w ${currencyArr[2].name} byłoby: ${grossDefaultCurrencyPrice},`

    }else{

        //cena podstawowa
        defaultCurrencyPrice = tempArr[0].price;
        defaultCurrencyPrice.toFixed(2);

        //podatek VAT od ceny bez przeliczenia na inną walutę
        taxForDefaultCurrencyPrice = defaultCurrencyPrice * tax;
        taxForDefaultCurrencyPrice.toFixed(2);

        //cena podstawowa z podatkiem VAT
        grossDefaultCurrencyPrice = defaultCurrencyPrice + taxForDefaultCurrencyPrice;
        grossDefaultCurrencyPrice.toFixed(2);

        // cena po przeliczeniu na walutę USD z podatkiem VAT
        totalUSDPrice = tempArr[0].price * currencyArr[0].price + ((tempArr[0].price * currencyArr[0].price) * tax);
        totalUSDPrice.toFixed(2);

        // cena po przeliczeniu na walutę EURO z podatkiem VAT
        totalEuroPrice = tempArr[0].price * currencyArr[1].price + ((tempArr[0].price * currencyArr[1].price) * tax);
        totalEuroPrice.toFixed(2);

        return stringToPrint =
            "\n" +
            `    Wybrany produkt: ${tempArr[0].name},\n` +
            `    Wybrana waluta: ${tempArr[1].name},\n` +
            `    Koszt produktu netto: ${tempArr[0].price},\n` +
            `    Koszt całkowity zamówienia brutto: ${grossDefaultCurrencyPrice},\n` +
            "\n" +
            "    Na cenę składa się:\n" +
            "\n" +
            `    Wartość netto : ${defaultCurrencyPrice},\n` +
            `    Podatek VAT: ${taxForDefaultCurrencyPrice},\n` +
            `    Łącznie: ${grossDefaultCurrencyPrice}\n` +
            "\n" +
            `    Cena w USD: ${totalUSDPrice},\n` +
            `    Cena w EURO: ${totalEuroPrice}, \n`

    }

}

const compute = async () => {

    console.log("\n   Witaj w kalkulatorze produktów\n");

    selectedProduct =
        await askQuestion
        (
            `   Wybierz produkt:\n   \n   0.) Aby zakończyć,\n   A:) ${productArr[0].name} [ ${productArr[0].price} PLN ],\n   B:) ${productArr[1].name} [ ${productArr[1].price} PLN ],\n   C:) ${productArr[2].name } [ ${productArr[2].price} PLN ],\n \n   Wybrana opcja:  `
        );
    await validAnswer(selectedProduct.trim().toLowerCase());

    selectedCurrency =
        await askQuestion
        (
            `\n   Wybierz walutę:\n   \n   A:) ${currencyArr[0].name} [ ${currencyArr[0].price} ],\n   B:) ${currencyArr[1].name} [ ${currencyArr[1].price} ],\n   C:) PLN,\n \n   Wybrana opcja:  `
        );

    await validAnswer(selectedCurrency.trim().toLowerCase());

    return stringToPrint = await totalCalculation(selectedProduct,selectedCurrency);

}
compute().then((responsFromTerminal: string) => {
    console.log(responsFromTerminal);
    console.log(`\n    Dziękujemy za skorzystanie z naszego kalkulatora produktów. Do następnego razu!\n`);
    process.exit(0);
});
