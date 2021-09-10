/*
At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character and to determine:

Instructions
The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.
You have to keep in mind that: 

Each character will be treated separately.
The last character is the point.
Use three variables as counters.*/

let test = "my name is Austin.";
let numberofchar = test.length;
let numberofwords = test.split (" ");
for (let i = 0; i < numberofwords.length; i++){
    let vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'O', 'u',]
}
for (let char of test){
    if(vowels.includes(numberofchar)){
        vowelsCount++
    }
}
console.log(numberofchar,numberofwords,vowelscount);


