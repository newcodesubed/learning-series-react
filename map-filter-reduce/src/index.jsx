var numbers = [3, 56, 2, 48, 5];
import emojipedia from "./emojipedia"

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
// const array=[];
// console.log(emojipedia);
// for(let i=0 ;i<emojipedia.length; i++){
//     const sring = emojipedia[i];
//     console.log(sring.meaning.substring(0,70));
//     array.push(sring.meaning.substring(0,70));
// }
// console.log(array);

//by using map im creating new array with item in my data emojipedia. the return would edit wahat i need in the newarray.

const newEmoji= emojipedia.map((emojiEntry)=>{
    return emojiEntry.meaning.substring(0,70)
})
console.log(newEmoji)


