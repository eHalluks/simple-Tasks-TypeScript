/*

    TASK: 4 (#fundamentals)

    DESCRIPTION:

    [ done ] TODO: Make a universal function;
    [ done ] TODO: Return to string yes or no instead True or false;
    [ not finished yet ] TODO: Create a unit test;

 */

interface ProductInter {
    name: string;
    count: number;
    isDegradable: boolean;
}

const product: ProductInter = {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradable: true,
};

const returnProductProperty = (productValue: ProductInter, propertyName: keyof ProductInter): string | number | boolean => {
    return productValue[propertyName];
}

let englishVersion: boolean = false;
const englishVersionPositiveResponse: string = "Yes";
const englishVersionNegativeResponse: string = "No";
const englishVersionNotSpecified: string = "Not specified";

const productCount = returnProductProperty(product, "count") as number;
let produktEcoStatus = returnProductProperty(product, "isDegradable") as boolean | string;
produktEcoStatus === true ? produktEcoStatus = "Tak": produktEcoStatus = "Nie";
const relatedProduct = returnProductProperty(product, "name") as string;

if(!typeof 'string'){

    produktEcoStatus = "Nie określono";

    const showProductDetails: string =
        "English version" +
        `   Related to: ${relatedProduct}\n` +
        `   Available quantity: ${productCount.toFixed(2)} pcs\n`+
        `   Is the product eco-friendly?: ${englishVersionNotSpecified}\n` +
        "Polish version" +
        `   Dotyczy: ${relatedProduct}\n` +
        `   Dostępna ilość: ${productCount.toFixed(2)} szt\n`+
        `   Ekologiczny: ${produktEcoStatus}\n`

    console.log("\n   Hi I need a product 'Opakowanie zbiorcze'. I need to find out the quantity of this product in stock and whether the product is environmentally friendly.\n");

    console.log(showProductDetails);


}else if(produktEcoStatus === "Tak"){
    englishVersion = true

    const showProductDetails: string =
        "   English version:\n" +
        `\n   Related to: ${relatedProduct}\n` +
        `   Available quantity: ${productCount.toFixed(2)} pcs\n`+
        `   Is the product eco-friendly?: ${englishVersionPositiveResponse}\n` +
        "\n   Polish version:\n" +
        `\n   Dotyczy: ${relatedProduct}\n` +
        `   Dostępna ilość: ${productCount.toFixed(2)} szt\n`+
        `   Ekologiczny: ${produktEcoStatus}\n`

    console.log("\n   Hi I need a product 'Opakowanie zbiorcze'. I need to find out the quantity of this product in stock and whether the product is environmentally friendly.\n");

    console.log(showProductDetails);
}else{

    const showProductDetails: string =
        "English version" +
        `   Related to: ${relatedProduct}\n` +
        `   Available quantity: ${productCount.toFixed(2)} pcs\n`+
        `   Is the product eco-friendly?: ${englishVersionNegativeResponse}\n` +
        "Polish version" +
        `   Dotyczy: ${relatedProduct}\n` +
        `   Dostępna ilość: ${productCount.toFixed(2)} szt\n`+
        `   Ekologiczny: ${produktEcoStatus}\n`

    console.log("\n   Hi I need a product 'Opakowanie zbiorcze'. I need to find out the quantity of this product in stock and whether the product is environmentally friendly.\n");

    console.log(showProductDetails);

}




