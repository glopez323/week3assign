// Week 3 Coding Assignment 

// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
console.log( "Quetion 1");

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1.a
console.log(ages[ages.length - 1] - ages [0]);
//1.b
console.log(ages.push(24))
console.log(ages[ages.length - 1] - ages [0])

//1.c
let total1 = 0
for( i = 0; i < ages.length; i++) {
        const age = ages[i]
        total1 = total1 + age
}
console.log(total1/ages.length)


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

console.log( "Questions 2");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names)

//2.a
let lettersInNames = 0;

for(let i = 0; i < names.length; i++){
    console.log("Index #: ",i, "name:", names[i]);
    console.log("Index #: ",i, " count: ", names[i].length)
    lettersInNames = lettersInNames + names[i].length;
}
console.log("Sum of letters in names array: ", lettersInNames)


let average = lettersInNames / names.length;
console.log(average)

// 2.b
console.log(names)
let concatenatedNames = "";
for(let i = 0; i < names.length; i++){
    console.log("each name:", names[i]);
    concatenatedNames = concatenatedNames + names[i] + " ";
}
 console.log(concatenatedNames) 

// 3.How do you access the last element of any array?
// based on ex. from line 13 (by adding "-1" is how you access the last element of the array)

console.log("Question 3");

const array1 = [1, 2, 3, 4, 5]
console.log(array1[array1.length - 1])

// 4.How do you access the first element of any array?
// you access the first element with 0 since that is the first option

console.log("Question 4");

const array2 = [1, 2, 3, 4, 5]
console.log(array2[array2[0]])

// 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

console.log("Question 5");

let namesLengths = [];
console.log(namesLengths)

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    console.log(names[i].length);
    namesLengths.push(names[i].length);
}
console.log("Sum of letters", namesLengths)


// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

console.log("Question 6");

let total = 0;

for(let i = 0; i < namesLengths.length; i++){
    console.log(namesLengths[i]);
    total = total + namesLengths[i];
}
console.log(total)


// 7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

console.log("Question 7");

function repeatWord (word, n) {
    let output = ''
    for( let i = 0; i < n; i++) {
        output += word 
    }
    return output
}
console.log(repeatWord('Test', 5))

// 8.Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

console.log("Question 8");

function fullName (firstName, lastName){
    return firstName + " " + lastName;
}
    var fullName = fullName("German", "Lopez")
console.log(fullName)


// 9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

console.log("Question 9");

let myNumbers = [100, 200, 300, 400]
function sumArray(array) {
    let sumOfNumbers = 0;
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
        sumOfNumbers = sumOfNumbers + array[i];
    }
    console.log("Sum of all numbers", sumOfNumbers)

    if(sumOfNumbers > 100){
        return true;
    } else {
        return false
    }
}
console.log(sumArray(myNumbers));

// 10.Write a function that takes an array of numbers and returns the average of all the elements in the array.

console.log("Question 10");

let arrayAverage = [1,2,3,4,5]

let total5= 0
for(let i = 0; i < ages.length; i++) {
    let age = ages[i]
    total5 = total5 + age; 
}
console.log(total5 / ages.length);



// 11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

console.log("Question 11");

function isOneBiggerThanTwo(arr1, arr2) {


    let total3 = 0;
    for (let i = 0; i < arr1.length; i++) {
        total3 =(total3 + arr1[i])
    }
    const average1 = total3/arr1.length
    console.log(average1)
    
    
    
    let total4 = 0;
    for (let i = 0; i < arr2.length; i++) {
        total4 =(total4 + arr2[i])
    }
    const average2 = total4/arr2.length
    console.log(average2)
    
    if (average1 > average2) return true
    
    }
    console.log(isOneBiggerThanTwo([4,5,6], [1,2,3]))


// 12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("Question 12");

function willBuyDrink (isHotOutside, moneyInPocket) {
    moneyInPocket = 11
    if (isHotOutside == true && moneyInPocket > 10.50) {
        console.log(true);
    }
} 


// 13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log("Question 13");

// going to the Eagles game if i have more than 400 dollars

function eaglesGame (enoughDough, notEnough) {
    enoughDough = 600;
    notEnough = 300
    if (enoughDough > 400 == true){
        console.log("going to the game");
    } else { 
        (notEnough < 400)
        console.log("not going to the game");
    }
}

