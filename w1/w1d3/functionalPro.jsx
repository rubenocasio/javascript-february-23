// ------ callback functions -------
const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged ${price}`)
}
// makingPurchase("Ruben", 2.99)

const returningItems = (person, price) => {
    console.log(`Processing refund for ${person}, $${price} will be issued to ${person}'s bank account.`)
}
// returningItems("Ruben", 50.99)

const parentFunction = (callback, person, price) => {
    console.log(`Welcome to my store ${person}`);
    callback(person, price);
};
// parentFunction(makingPurchase, "Ruben", 99.99)
// parentFunction(returningItems, "Ruben", 99.99)

// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    { id: 3, itemName: "dogFood", price: 1.29, shops: ["petco", "Trader Joes"] },
    { id: 5, itemName: "Logitech gamer chair", price: 300, shops: ["amazon", "Best Buy"]},
    { id: 9, itemName: "soup dumplings", price: 3.29, shops: ["Trader Joes"] },
    { id: 2, itemName: "Air ticket to Japan", price: 1400, shops: ["expedia"] },
    { id: 10, itemName: "custard tart", price: 3.99, shops: ["Trader Joes"] },
]);

// ------ .map & .filter -------

const prices = shoppingList.map((item) => {
    return item.price
})
// console.log(prices)

const prices2 = shoppingList.map((item, i) => `${i}: ${item.price} ` )
// console.log(prices2)

const prices3 = shoppingList.map((item) => {
    return item.itemName
})
// console.log(prices3)

const prices4 = shoppingList.map((item) => {
    return item.shops;
});
// console.log(prices4);

//.filter

const cheapItems = shoppingList.filter((item) => item.price > 100)
// console.log(cheapItems)

const cheapItems2 = shoppingList.filter((item) => item.price < 100).map((item) => item.itemName)
// console.log(cheapItems2)

// const cheapItems3 = shoppingList.filter((item) => item.price < 100).map((item) => {
//     console.log(item.itemName + item.price)
// })
// console.log(cheapItems3)

// const addTV = shoppingList.concat([{id: 900, itemName: "Sony TV", price: 5000, shop: ["Best Buy"]}])
// console.log(addTV)

// const addTV = shoppingList.push([{itemName: "Sony TV", price: 5000, shop: ["Best Buy"]}])
// console.log(addTV)