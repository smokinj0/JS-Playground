//create a function that takes a string and returns the first character that repeats. if none are repeatedthen return -1.
/*
function repeatChar(chars) {
    for(let i = 1, i < chars.length, i++) {
        if(chars.slice(0,1).includes(chars[i])) {  //checking if index characters match
            return chars[i] //return the matched character
        }
    }
    return '-1'
}

console.log(repeatChar("alia"))  */

/*
* i = 1 char = 'l' 
*  char.slice(0,1) is "a"
* includes (char[i] "l")
*
* i = 2 is "i"
* char.slice(0,2) is "al"
*includes(char[i]) is "i"
*  
*i = 3 is "a"
*char.slice(0,3) is ("ali")
*char.include(char[i]) is "a"
*/

//create a function that reverse letters in a string but keeps numbers in current order "jkl5mn923o" -> "omn5lk923j"
/*
function reverseLettersInString(str) {
    // Extract and reverse the letters
    const letters = str.match(/[a-zA-Z]/g).reverse();
    
    // Reinsert the reversed letters back into their original positions
    return str.replace(/[a-zA-Z]/g, () => letters.shift());
}

// Example usage
let input = "jkl5mn923o";
let output = reverseLettersInString(input);
console.log(output); // Output: "omn51k923j" */

function numbers(n) {
    return n >= '0' && n <= '9'
}

function reverseWord(str) {
    let temp = []

    for(let i = 0; i < str.length; i++) {
        if(!numbers(str[i])) {
            temp.push(str[i])
        }
    }
    let result =[]

    for(let i = 0; i < str.length; i++) {
        if(!numbers(str[i])) {
            result +=  temp.pop()
        }else{
            result += str[i]
        }

    }
    return result;
}
console.log(reverseWord("123cba"));