let newArray = []
//add and remove data
newArray.push('al final')
newArray.unshift('al inicio')

newArray.pop()
newArray.shift()

// Splice
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);     // remove [2], [3] and return those values
                        // array now equals ['today', 'was', 'great']

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
                        // Remove and add with splice(parmIndex, parmNumItems, *items_to_add)
numbers.splice(startIndex, amountToDelete, 13, 14);     // the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);                                   // returns [ 10, 11, 12, 13, 14, 15 ]

// slice
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// Basic Data Structures: Copy an Array with the Spread Operator
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];                     // thatArray equals [true, true, undefined, false, null]
                                                    // thisArray remains unchanged, and is identical to thatArray

// Basic Data Structures: Combine Arrays with the Spread Operator
thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];   
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']                                                

// indexOf
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');        // returns -1
fruits.indexOf('oranges');      // returns 2
fruits.indexOf('pears');        // returns 1, the first index at which the element exists

// for 
const greaterThanTen = (arr, acc=[]) => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > 10)
            acc.push(arr[i]);
    return acc;
}
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));     // returns [12, 14, 80]

// key-value
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true,
    data: {}
};// access: tekkenCharacter['player] or tekkenCharacter.player

delete tekkenCharacter.data;    // remove property
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
['oranges','plums','strawberries'].map(x => delete foods[x])

// Has a property
foods.hasOwnProperty('grapes');     // both return true
'strawberries' in foods;            // both return false

// for in to iterate keys
for (let food in foods) {
    console.log(food);
}

// Object.keys(my_objeto)
Object.keys(foods)
