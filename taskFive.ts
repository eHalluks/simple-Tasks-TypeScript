/*

    TASK: 5 (#fundamentals)

    DESCRIPTION: Show in console all objects

    [ done ] TODO: 1# Specify the types in this code, then write a loop that will sequentially print the value of each element individually in the console.
    [ done ] TODO: 2# Try using different types of loops: forEach, for...of, for...in, for...in.
    [ done ] TODO: 3# Pay attention to how the editor efficiently suggests options while you work.
    [ done ] TODO: 4# There is an error in the code - it should be visible, and you can easily fix it.

 */

interface Product {

    name: string,
    count: number,
    pricePerOne: number,
    vat: number,

}

class ExclusiveProduct implements Product {

    name: string;
    count: number;
    pricePerOne: number;
    vat: number;

    constructor(name: string, count: number, pricePerOne: number, vat: number) {
        this.name = name
        this.count = count
        this.pricePerOne = pricePerOne
        this.vat = vat
    }
}


const productRepository: ExclusiveProduct[] = [

    {
        name: 'Apple Iphone',
        count: 1000,
        pricePerOne: 3000,
        vat: 0.23,
    },
    {
        name: 'Apple MacBook Pro',
        count: 5000,
        pricePerOne: 6500,
        vat: 0.23,
    },
    {
        name: 'Apple EarPods',
        count: 1075,
        pricePerOne: 250,
        vat: 0.23,
    },
    {
        name: 'Apple Ipad',
        count: 250,
        pricePerOne: 5500,
        vat: 0.23,
    },

];

let counter: number = 0

const displayProducts = ()=> {

    console.log("\n   Ordinal   Name   Quantity   Price   Tax\n");
    productRepository.forEach(item => {
        counter++;
        console.log(`   ${counter}.) ${item.name} |  ${item.count}/pcs |  ${item.pricePerOne} EUR |  ${item.vat * 100}%,`);
    });

    console.log("\n   ________________________________________");

    counter = 0;
};

const countPrice = (count: number, price: number, vat: number): number => {
    return (count - (count - ((count * 0.75)))) * price + (((count - (count - ((count * 0.75)))) * price) * vat);
}

const displayPrice = () => {

    counter === 0 ? counter : counter = 0;
    console.log("\n   Offer: \n");
    productRepository.forEach(item => {
        const itemToDisplay = Math.ceil(countPrice(item.count, item.pricePerOne, item.vat));
        counter++;
        console.log(`   ${counter}.) Product: ${item.name};`);
        console.log(`       Price: ${itemToDisplay} EUR\n`);
    })

    console.log("   ________________________________________");

    counter = 0;

}

const displayingVariation = () => {

    //for...i

    console.log("\n   Offer For...i: \n");
    for(let i =0; i <productRepository.length; i++){
        const itemToDisplay = Math.ceil(countPrice(productRepository[i].count, productRepository[i].pricePerOne, productRepository[i].vat));
        counter++;
        console.log(`   ${counter}.) Product: ${productRepository[i].name};`);
        console.log(`       Price: ${itemToDisplay} EUR\n`);
    }

    counter = 0;

    //for...of
    console.log("\n   Offer For...of: \n");
    for (const item of productRepository){
        const itemToDisplay = Math.ceil(countPrice(item.count, item.pricePerOne, item.vat));
        counter++;
        console.log(`   ${counter}.) Product: ${item.name};`);
        console.log(`       Price: ${itemToDisplay} EUR\n`);

    }

    counter = 0;

    //for...in
    console.log("\n   Offer For...in: \n");
    for (const key in productRepository) {
        const item = productRepository[key];
        const itemToDisplay = Math.ceil(countPrice(item.count, item.pricePerOne, item.vat));
        counter++;
        console.log(`   ${counter}.) Product: ${item.name};`);
        console.log(`       Price: ${itemToDisplay} EUR\n`);
    }

    counter = 0;

    console.log("   ________________________________________");

}

const totalGoodsValue = () => {

    const totalGoodsValueCost = productRepository.reduce((totalValue, currentValue) => {
        return totalValue + currentValue.pricePerOne;
    }, 0);

    const totalQuantity = productRepository.reduce((totalValue, currentValue) => {
        return totalValue + currentValue.count;
    }, 0);

    const totalProducts: number = productRepository.length;
    const productsName: String[] = [];
    productRepository.forEach(product => {
        productsName.push(String(product.name));
    })
    const stringProducts: string = productsName.join(" | ");

    console.log(`\n   Warehouse sources:\n`);
    console.log(`   Total products in offer: ${totalProducts} products: ${stringProducts},`);
    console.log(`   Total available quantity of items: ${totalQuantity} pieces,`);
    console.log(`   Total goods value: ${totalGoodsValueCost * totalQuantity} NET/EUR,\n`);

    console.log("   ________________________________________");

    counter = 0;
}


const main = () => {
    displayProducts();
    displayPrice();
    displayingVariation();
    totalGoodsValue();
}

try{

    main();

}catch (err){

    console.log(err);

}finally {

    console.log("\n   #############################\n");
    console.log("   Operation completed");
    console.log("\n   #############################");
}