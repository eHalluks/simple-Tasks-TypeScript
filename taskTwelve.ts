/*

    TASK: 12 (#fundamentals)

    DESCRIPTION: Create four seasons and put in enum

    [ done ] TODO: 1# Create namespace and export enum
    [ done ] TODO: 2# Show min 2 methods to present keys

 */


namespace MyEnums {
    export enum Seasons {
        Winter,
        "Sprint",
        Summer,
        Autumn,
    }
}

console.log("");
console.log("    Presenting method 1:\n");
for (const key in MyEnums.Seasons){
    if(Number.isNaN(Number(key))){
        console.log("   " ,key, "\n");
    }
}

console.log("    Presenting method 2:\n");
const presentingAllKeys = Object
    .keys(MyEnums.Seasons)
    .filter(key => Number.isNaN(Number(key)));

console.log("   ", "Quantity of enums: ", presentingAllKeys.length);
console.log("   " , "Details: " , presentingAllKeys);