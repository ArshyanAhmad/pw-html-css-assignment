// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object.Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR.The program should
// use the map higher - order function to create a new object with the converted prices in Rupees.

const myStore = new Map()

myStore.set('Apple', '20$');
myStore.set('Mango', '10$');
myStore.set('Car', '30$');

function convert(store) {
    for (const item of store) {
        const Name = item[0]
        const price = item[1]
        const dollarPrice = price.split('').splice(0, 2).join('')

        createNewMap(Name, dollarPrice)
    }
}

function createNewMap(Name, dollarPrice) {
    const newMap = new Map()
    newMap.set(Name, `${dollarPrice * 80} INR`)
    console.log(newMap);
}

convert(myStore)