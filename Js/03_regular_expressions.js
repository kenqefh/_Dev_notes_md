
// https://devdocs.io/javascript/global_objects/regexp

// Are special string that represent a search pattern. Also known 'regex' or 'regexp', they help programmers match, search, and replace text.

// Regular Expressions: Using the Test Method
    let testStr = "freeCodeCamp";
    let testRegex = /Code/;
    testRegex.test(testStr);
    // Returns true

// Regular Expressions: Match Literal Strings
    let testStr = "Hello, my name is Kevin.";
    let testRegex = /Kevin/;
    testRegex.test(testStr);    // Returns true
    
    let wrongRegex = /kevin/;
    wrongRegex.test(testStr);   // Returns false

// Regular Expressions: Match a Literal String with Different Possibilities
    let diferentes_posibilities = /yes|no/

// Regular Expressions: Ignore Case While Matching
    // /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".
    let myString = "freeCodeCamp";
    let fccRegex = /freecodecamp/i; // Change this line
    let result = fccRegex.test(myString);

// Regular Expressions: Extract Matches
    "Hello, World!".match(/Hello/);     // Returns ["Hello"]
    
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    ourStr.match(ourRegex);             // Returns ["expressions"]

// Regular Expressions: Find More Than the First Match
    let testStr = "Repeat, Repeat, Repeat";
    let repeatRegex = /Repeat/g;
    testStr.match(repeatRegex);         // Returns ["Repeat", "Repeat", "Repeat"]
    // You can have multiple flags on your regex like /search/gi

// Regular Expressions: Match Anything with Wildcard Period
    let humStr = "I'll hum a song";
    let hugStr = "Bear hug";
    let huRegex = /hu./;
    huRegex.test(humStr); // Returns true
    huRegex.test(hugStr); // Returns true

// Regular Expressions: Match Single Character with Multiple Possibilities
    let bigStr = "big";
    let bagStr = "bag";
    let bugStr = "bug";
    let bogStr = "bog";
    let bgRegex = /b[aiu]g/;
    bigStr.match(bgRegex); // Returns ["big"]
    bagStr.match(bgRegex); // Returns ["bag"]
    bugStr.match(bgRegex); // Returns ["bug"]
    bogStr.match(bgRegex); // Returns null

// Regular Expressions: Match Letters of the Alphabet
    let catStr = "cat";
    let batStr = "bat";
    let matStr = "mat";
    let bgRegex = /[a-e]at/;
    catStr.match(bgRegex); // Returns ["cat"]
    batStr.match(bgRegex); // Returns ["bat"]
    matStr.match(bgRegex); // Returns null

// Regular Expressions: Match Numbers and Letters of the Alphabet
    let myRegex = /[a-z0-9]/ig;

// Regular Expressions: Match Single Characters Not Specified
    let myNotEsp = /[^aeiou]/gi // matches all characters that are not a vowel.
    
// Regular Expressions: Match Characters that Occur One or More Times
    let myRegex = /s+/g;

// Regular Expressions: Match Characters that Occur Zero or More Times
    let chewieRegex = /Aa*/;

// Regular Expressions: Find Characters with Lazy Matching
    // greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
    'titanic'.match(/t[a-z]*i/)     // ["titani"]
    
    // lazy match finds the smallest possible part of the string that satisfies the regex pattern.
    'titanic'.match(/t[a-z]*?i/)    // ["ti"]

// Regular Expressions: Find One or More Criminals in a Hunt
    let reCriminals = /C+/

// Regular Expressions: Match Beginning String Patterns
    // [^cosaQueNoSeraBuscada]  // No se buscara
    // /^InicioDeCadena/        // Que inicie con este.
    let calRegex = /^Cal/;

// Regular Expressions: Match Ending String Patterns
    let lastRegex = /caboose$/;

// Regular Expressions: Match All Letters and Numbers
    let regexp = /\w/g;

// Regular Expressions: Match Everything But Letters and Numbers
    let regexp = /\W/g;

// Regular Expressions: Match All Numbers
    let regexp = /\d/g;

// Regular Expressions: Match All Non-Numbers
    let regexp = /\D/g;

// Regular Expressions: Restrict Possible Usernames
    let regexp = /^[a-z]([a-z]+\d*|\d{2,})^/i;

// Regular Expressions: Match Whitespace
    let countWhiteSpace = /\s/g

// Regular Expressions: Match Non-Whitespace Characters
    let countWhiteSpace = /\S/

// Regular Expressions: Specify Upper and Lower Number of Matches
    let countWhiteSpace = /a{1,5}/  // between 1 - 5 times  a..5times]

// Regular Expressions: Specify Only the Lower Number of Matches
    let countWhiteSpace = /a{1,}/   // once to more time    a+
    
// Regular Expressions: Specify Exact Number of Matches
    let countWhiteSpace = /a{3}/    // third                 a

// Regular Expressions: Check for All or None
    // This checks for zero or one of the preceding element.
    let rainbowRegex= /colou?r/     // color and colour match

// Regular Expressions: Positive and Negative Lookahead
    // Character	Meaning
    // x(?=y)       // Matches x only if x is followed by y.
                    // For example, /Jack(?=Sprat)/ matches "Jack" only if it is followed by "Sprat".
                    // /Jack(?=Sprat|Frost)/ matches "Jack" only if it is followed by "Sprat" or "Frost". However, neither "Sprat" nor "Frost" is part of the match results.
    // 
    // x(?!y)	    // Matches x only if x is not followed by y.
                    // For example, /\d+(?!\.)/ matches a number only if it is not followed by a decimal point.
                    // /\d+(?!\.)/.exec('3.141') matches "141" but not "3.141".
    let sampleWord = "astronaut";
    var pwRegex =  /^\D(?=\w{5})(?=\w*\d{2})/;
    let result = pwRegex.test(sampleWord);

// Regular Expressions: Check For Mixed Grouping of Characters
    let testRegex = /P(engu|umpk)in/;       // Penguin or Pumpkin

// Regular Expressions: Reuse Patterns Using Capture Groups
    // se usan: () para definir un grupo
    // \1       => referencia al primer grupo que sera el que se va a repetir
    // \1\2     => referencia al (G1)(G2)
    // \1\2\1   => referencia al (G1)(G2)(G1)

    let repeatStr = "regex regex";
    let repeatRegex = /(\w+)\s\1/;
    repeatRegex.test(repeatStr); // Returns true
    repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

    let repeatNum = "42 42 42";
    let reRegex = /^(\d{2,})(\s)\1\2\1$/;   // \1\2\1   => (grupo1)
    //      [ '42 42 42',
    //      '42',
    //      ' ',
    //      index: 0,
    //      input: '42 42 42',
    //      groups: undefined ]

// Regular Expressions: Use Capture Groups to Search and Replace
    let wrongText = "The sky is silver.";
    let silverRegex = /silver/;
    wrongText.replace(silverRegex, "blue");     // Returns "The sky is blue."

    let fixRegex = /([a-z]+)\s([a-z]+)\s([a-z]+)/;                  // () <= is a group (G1) (G2) (G3)..
    let replaceText = '$3 $2 $1';                                   // (G3) (G2) (G1) <= Nuevo orden
    let result = "one two three".replace(fixRegex, replaceText);    // three two one
    
// Regular Expressions: Remove Whitespace from Start and End
    let hello = "   Hello, World!  ";
    hello.trim()                    // 'Hello, World!'
    
    let wsRegex = /^(\s*)(.+\S)(\s*)$/;         
    hello.replace(wsRegex,'$2');    // 'Hello, World!'
    

    