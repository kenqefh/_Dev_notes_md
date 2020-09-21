/*
seven different data types which are:
    undefined,
    null, 
    boolean, 
    string, 
    symbol, 
    number, 
    object.
*/
var varName;

/* Operadors:
+
-
*
/
%
*/

/* Escape sequences in String
    Code	Output
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed
*/
var myStr = "Bob";
myStr[0] = "J";     // Not change the value

/*
    [].push() //add end
    [].pop() //quit end
    [].shift() //quit first
    [].unshift() //add first
*/

/* Comparcion
    ==      // convert value | Ignore type
    ===     // type and value
    !=      // convert value | Ignore type
    !==     // type and value
    >, >=   // convert value | Ignore type

*/
Math.random()
Math.floor()
var a = parseInt('52')          // base10   => 52
var b = parseInt('1001', 2)     // base2    => 9
// Operador ternario ? :
    var result = true ? 10 : 15
    // With multiple contitional operators:
    result = (a === b) ? 'a and b are equal'
        : (a > b) ? 'a is greater' : 'b is greater'
    console.log(result)

const encode = (string) => string.replace(/[aeiou]/g, (chr) => '_aeiou'.indexOf(chr))
const decode = (string) => string.replace(/[1-5]/g, (num) => '_aeiou'.charAt(num))

const print = (...args) => {
    args.forEach(element => {
        code = encode(element)
        console.log('Clave: ' + element + ', encode: ' + code + ', decode: '+ decode(code))
    });
}

print('hello2', 'esta es una frase prueba para las proximas generaciones')


const multiples3or5 = limit => {
    let sum = 0
    for(let num = 3; num < limit; num++)
        sum += (num % 3 == 0 || num % 5 == 0) ? num : 0
    return sum
}

function solution(number){
    number = number-1;
    var numFive = Math.floor(number/5);
    var numThree = Math.floor(number/3);
    var numFifteen = Math.floor(number/15);
    
    return SAS(numFive, 5, 5*numFive) + SAS(numThree, 3, 3*numThree) - SAS(numFifteen, 15, 15*numFifteen);
}
//sumArithmeticSequence
var SAS = (n, start, end) => {
    return n*(start+end)/2;
}

const solution2 = (number) => {
    return [3,5,-15].reduce((acc, c_value) => {
        let max_n = Math.floor( (number - 1) / c_value)
        return acc + ( max_n * c_value * (1 + max_n) / 2 )
    }, 0);
}

const print2 = (...args) => {
    args.forEach(element => {
        console.log(solution(element))
        console.log(solution2(element))
        console.log(multiples3or5(element))        
    });
}
print2(4894874,4487,487,84898,48794849,4784478,74859,5555,4111125,546548, 48547)