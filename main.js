
class ArrayUtils{
    reverseString(str) {
    let reverse = [];
    for(let i = str.length - 1; i >= 0; i-- ){
        reverse += str[i];
    }
    return reverse
    }
}

const arrayUtils = new ArrayUtils();

let testReverse = "Hello"
let testTwo = "SuperDeeDuper"

// arrayUtils.reverseString(testReverse)

// arrayUtils.reverseString(testTwo)