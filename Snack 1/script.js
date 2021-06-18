//ES5

// var items = [

//     {
//         name: 'bici1',
//         weight: 30
//     },

//     {
//         name: 'bici2',
//         weight: 120
//     },

//     {
//         name: 'bici3',
//         weight: 80
//     }

// ];

// var currentHighestWeight = 0;
// var bikeName;

// for (x = 0; x < items.length; x++) {
//     if (items[x].weight > currentHighestWeight) {
//         currentHighestWeight = items[x].weight;
//         bikeName = items[x].name;
//     }
// }

// console.log (bikeName, currentHighestWeight)


// -------------------- ES6 -------------------- //


let items = [

    {
        name: 'bici1',
        weight: 10
    },

    {
        name: 'bici2',
        weight: 6
    },

    {
        name: 'bici3',
        weight: 13
    }

];

let currentLowestWeight;
let lightestBike;

for (x = 0; x < items.length; x++) {

    const { weight } = items[x];
    if (weight < currentLowestWeight || isNaN(currentLowestWeight)) {
        lightestBike = items[x];
        currentLowestWeight = weight;
    }
}

const { name, weight } = lightestBike;

console.log (`The lightest bike is ${name}, weighing ${weight}kg!!`)



