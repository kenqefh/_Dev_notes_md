/**
 * Introduction to the Intermediate Algorithm Scripting Challenges
 */

function whatIsInAName(collection, source) {
    return collection
        .filter(coll => Object.keys(source)
            .every(key => coll[key] === source[key])
        )
}

whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
], { last: "Capulet" });        // [ { first: 'Tybalt', last: 'Capulet' } ]

whatIsInAName([
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 }
], { "apple": 1, "cookie": 2 }); // [{ "apple": 1, "bat": 2, "cookie": 2 }]

whatIsInAName([
    { "a": 1, "b": 2, "c": 3 }
], { "a": 1, "b": 9999, "c": 3 }) // return []

/**
 * Spinal Case
 */
const spinalCase = str => {
    return str
        .split('')
        .map(l => l === l.toUpperCase() ? ` ${l}` : l)
        .join('')
        .trim()
        .replace(/(\s|_|\W)+/g, '-')
        .toLowerCase();
}
spinalCase('ThisIs   -  -- -__Spinal Tap')  // this-is-spinal-tap

/**
 * Pig Latin
 * - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
 * - If a word begins with a vowel, just add "way" at the end.
 */
const translatePigLatin = (str) => {
    let wovel = str.search(/[aeiou]/)
    return (wovel === 0 ? `${str}way`
        : (wovel === -1) ? `${str}ay`
            : `${str.slice(wovel)}${str.slice(0, wovel)}ay`)
}

translatePigLatin("rhythm");  // 'rhythmay'


/**
 * Search and Replace
 * - First argument is the sentence to perform the search and replace on.
 * - Second argument is the word that you will be replacing (before).
 * - Third argument is what you will be replacing the second argument with (after).
 */
const myReplace = (str, before, after) => (
    str.replace(before, RegExp(/[A-Z]/).test(before[0])
        ? `${after[0].toUpperCase()}${after.slice(1)}`
        : after)
)
myReplace("Let us go to the store", "store", "mall")                    // "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")         // "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling")          // "This has a spelling error".
myReplace("His name is Tom", "Tom", "john")                             // "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms")     // "Let us get back to more Algorithms".


/**
 * DNA Pairing
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * - Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * - Return the provided character as the first element in each array.
 * - For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 */
const DNA = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
}
const pairElement = (str) => {
    return [...str].map(lett => [lett, DNA[lett]])
}

console.log(pairElement("TTGAG"))                 // [['T', 'A'], ['T', 'A'], ['G', 'C'], ['A', 'T'], ['G', 'C']]


/**
 * Missing Letter
 * - Find the missing letter in the passed letter range and return it.
 * - If all letters are present in the range, return undefined.
 */
function fearNotLetter(str) {
    let first = str.charCodeAt(0)
    let last = str.charCodeAt(str.length - 1)

    for (let i = first, j = 0; i <= last; i++, j++)
        if (i !== str.charCodeAt(j))
            return String.fromCharCode(i)
}
fearNotLetter("abce")                           // return "d".
fearNotLetter("abcdefghjklmno")                 // return "i".
fearNotLetter("stvwx")                          // return "u".
fearNotLetter("bcdf")                           // return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz")     // return undefined


/**
 * Sorted Union
 */

const flattenDeep = arr => arr.reduce((acc, val) => (
    Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)
), [])

function uniteUnique(...arr) {
    let res = flattenDeep(arr)
    //res.sort((a ,b) => a === b ? 0 : a > b ? 1 : -1)
    return [...new Set(res)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);   // [1, 3, 2, 5, 4]

/**
 * Convert HTML Entities
 * - Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */
const rules = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
}
const convertHTML = str => {
    Object.keys(rules).map(rule => {
        str = str.replace(new RegExp(rule, 'g'), rules[rule])
    })
    return str;
}
convertHTML("Dolce & Gabbana")              // "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos")   // "Hamburgers &lt; Pizza &lt; Tacos".
convertHTML("Sixty > twelve")               // "Sixty &gt; twelve".
convertHTML('Stuff in "quotation marks"')   // "Stuff in &quot;quotation marks&quot;".
convertHTML("Schindler's List")             // "Schindler&apos;s List".
convertHTML("<>")                           // "&lt;&gt;".
convertHTML("abc")                          // "abc".


/**
 * Sum All Odd Fibonacci Numbers
 * - Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * - The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * - For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */
const sumFibs = (num) => {
    let a = 1, b = 0, c = 1, resul = 0
    while (c <= num) {
        if (c % 2 != 0)
            resul += c
        c = a + b
        b = a
        a = c
    }
    return resul;
}
sumFibs(1)              // a number.
sumFibs(1000)           // 1785.
sumFibs(4000000)        // 4613732.
sumFibs(4)              // 5.
sumFibs(75024)          // 60696.
sumFibs(75025)          // 135721.

/**
 * Sum All Primes
 * - Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */
const getPrime = (min = 1) => {
    if (min <= 1) return 2
    else if (min === 2) return 3
    else {
        let count
        do {
            min += 2
            count = Number.parseInt(Math.sqrt(min))
            while (count > 1) {
                if (min % count == 0)
                    break
                count--
            }
        } while (count !== 1)
        return min
    }
}

const sumPrimes = (num) => {
    let concurrentPrime = 2, sum = 0
    while (concurrentPrime <= num) {
        sum += concurrentPrime
        concurrentPrime = getPrime(concurrentPrime)
    }
    console.log(sum)
    return sum;
}

sumPrimes(10)       // a number.
sumPrimes(10)       // 17.
sumPrimes(977)      // 73156.

/**
 * Smallest Common Multiple
 */

function leastCommonMultiple(min, max) {
    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var multiple = min;
    range(min, max).forEach(function (n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}

console.log(leastCommonMultiple(7, 10))