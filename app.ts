// 2
let personName0 :string = "Eric";
console.log(`Hello ${personName0}, would you like to learn some Python today?`);

//3
let personName2: string = "Azhan Qaiser";

// Print in lowercase
console.log("Lowercase: " + personName2.toLowerCase());

// Print in uppercase
console.log("Uppercase: " + personName2.toUpperCase());

// Print in titlecase
console.log("Titlecase: " + personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());


// 4
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

// 5
let famous_person: string = "Albert Einstein";
let quote2: string = "A person who never made a mistake never tried anything new.";

let message1: string = `${famous_person} once said, "${quote2}"`;

console.log(message1);

//6
let personNameWithWhitespace: string = "\t \n Azhan Qaiser \t \n";

// Print name with whitespace
console.log("Name with Whitespace: '" + personNameWithWhitespace + "'");

// Strip whitespace and print the name
let strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped Name: '" + strippedName + "'");

//7
// Addition
let additionResult: number = 5 + 3;
console.log("Addition: 5 + 3 =", additionResult);

// Subtraction
let subtractionResult: number = 10 - 2;
console.log("Subtraction: 10 - 2 =", subtractionResult);

// Multiplication
let multiplicationResult: number = 4 * 2;
console.log("Multiplication: 4 * 2 =", multiplicationResult);

// Division
let divisionResult: number = 16 / 2;
console.log("Division: 16 / 2 =", divisionResult);

//8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//9
// Store your favorite number in a variable
let favoriteNumber: number = 2; // Replace 7 with your actual favorite number

// Create a message revealing your favorite number
let message: string = `My favorite number is: ${favoriteNumber}`;

// Print the message
console.log(message);

//10

// name:- Azhan Qaiser       //date:-3-5-24
let personName :string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// name:- Azhan Qaiser       //date:-3-5-24
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//11
// Array of friends' names
let names1: string[] = ["Anzal", "Ahad", "Arham", "Abd ur rehman", "Burhan"];

// Print each person's name one at a time
for (let i = 0; i < names1.length; i++) {
    console.log(`Friend ${i + 1}: ${names1[i]}`);
}

//12
// Array of friends' names
let names: string[] = ["Anzal", "Ahad", "Arham", "Abd ur rehman", "Burhan"];

// Personalized greeting for each person
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}! Have a great day!`);
}

//13
// Array of favorite modes of transportation
let favoriteTransportation: string[] = ["Tesla Model S", "Harley-Davidson Motorcycle", "Honda CG 125", "Vespa Scooter", "BMW M5"];

// Print statements about each item in the array
favoriteTransportation.forEach((transport) => {
    console.log(`I would like to own a ${transport}.`);
});

//14
// Array of people to invite to dinner
let guestList: string[] = ["Shafiq Chacha", "Aslam taya", "Saad bhai"];

// Print invitations to each person
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]`);
});

//15
// Array of people to invite to dinner
let guestList0: string[] = ["Shafiq Chacha", "Aslam taya", "Saad bhai"];

// Print invitations to each person
guestList0.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]`);
});

// Simulate a guest who can't make it
let unableToAttend0: string = "Shafiq Chacha";
console.log(`Unfortunately, ${unableToAttend0} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new guest
let newGuest1: string = "Azhar taya";
let indexOfUnableToAttend0: number = guestList.indexOf(unableToAttend0);
if (indexOfUnableToAttend0 !== -1) {
    guestList[indexOfUnableToAttend0] = newGuest1;
}

// Print second set of invitations with the updated guest list
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]`);
});

//16
// Original array of people to invite to dinner
let originalGuestList1: string[] = ["Aslam taya", "Saad bhai", "Azhar taya"];

// Print invitations to each person
originalGuestList1.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]`);
});

// Simulate a guest who can't make it
let unableToAttend: string = "Aslam taya";
console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new guest
let newGuest: string = "Ahad bhai";
let indexOfUnableToAttend: number = originalGuestList1.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    originalGuestList1[indexOfUnableToAttend] = newGuest;
}

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table!\n");

// Add three more guests
originalGuestList1.unshift("Usman"); // Add to the beginning
originalGuestList1.splice(Math.ceil(originalGuestList1.length / 2), 0, "Damil"); // Add to the middle
originalGuestList1.push("Arham"); // Add to the end

// Print new set of invitations with the updated guest list
originalGuestList1.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]`);
});

//17
// Original array of people to invite to dinner
let originalGuestList: string[] = ["Azhar taya", "Saad bhai", "Ahad bhai", "Usman", "Damil", "Arham"];

// Print invitations to each person
originalGuestList.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]`);
});

// Simulate a bigger dinner table announcement
console.log("Great news! We found a bigger dinner table!\n");

// Add three more guests
originalGuestList.unshift("Faizan"); // Add to the beginning
originalGuestList.splice(Math.ceil(originalGuestList.length / 2), 0, "Waris"); // Add to the middle
originalGuestList.push("Ghafoor"); // Add to the end

// Inform about the limited space for only two guests
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");

// Remove guests until only two names remain
while (originalGuestList.length > 2) {
    let removedGuest = originalGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two remaining people
originalGuestList.forEach((remainingGuest) => {
    console.log(`Dear ${remainingGuest},\nYou are still invited to dinner. We look forward to seeing you!\nSincerely, [Your Name]`);
});

// Remove the last two names to have an empty list
originalGuestList.pop();
originalGuestList.pop();

// Print the final state of the list
console.log("Final guest list:", originalGuestList);

//18
// Define the array of places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Marrakech"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order after sorting:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list and print to show the changed order
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order and print to show the changed order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order and print to show the changed order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

//19
// Define the array of dinner guests
let dinnerGuests: string[] = ["Anzal", "Ahad", "Arham", "Abd ur rehman", "Burhan"];

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);

//20
// Create an array of countries
let countries: string[] = ["USA", "Canada", "Australia", "Japan", "Germany"];

// Print the array of countries
console.log("List of countries:", countries);

//21
// Create objects containing information about countries
let usa = {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    language: "English"
};

let canada = {
    name: "Canada",
    capital: "Ottawa",
    population: 38005238,
    language: "English, French"
};

let australia = {
    name: "Australia",
    capital: "Canberra",
    population: 25499884,
    language: "English"
};

// Print information about the countries
console.log("Information about the United States:", usa);
console.log("Information about Canada:", canada);
console.log("Information about Australia:", australia);

//22
// Create an array of fruits
let fruits: string[] = ["Apple", "Banana", "Orange", "Grapes"];

// Intentionally access an out-of-bounds index to create an error
let invalidIndex: number = 5;
console.log("Attempting to access an invalid index:", fruits[invalidIndex]);

// Correct the error by accessing a valid index
let validIndex: number = 2;
console.log("Accessing a valid index:", fruits[validIndex]);

//23
let car: string = 'subaru';

// Test 1: Is car equal to 'subaru'? I predict True.
console.log(car === 'subaru');

// Test 2: Is car not equal to 'toyota'? I predict True.
console.log(car !== 'toyota');

// Test 3: Is the length of car equal to 6? I predict True.
console.log(car.length === 6);

// Test 4: Is car in uppercase equal to 'SUBARU'? I predict True.
console.log(car.toUpperCase() === 'SUBARU');

// Test 5: Is car not equal to 'Subaru'? I predict True.
console.log(car !== 'Subaru');

// Test 6: Is the length of car not equal to 5? I predict False.
console.log(car.length !== 5);

// Test 7: Is car in lowercase equal to 'SUBARU'? I predict False.
console.log(car.toLowerCase() === 'SUBARU');

// Test 8: Is car equal to 'honda'? I predict False.
console.log(car === 'honda');

// Test 9: Is the length of car less than 8? I predict True.
console.log(car.length < 8);

// Test 10: Is car not equal to 'Subaru'? I predict False.
console.log(car !== 'Subaru');

//24
let fruit: string = 'apple';
let number1: number = 10;
let number2: number = 5;
let colors: string[] = ['red', 'green', 'blue'];

// Tests for equality and inequality with strings
console.log(`Is fruit equal to 'apple'? I predict True.`);
console.log(fruit === 'apple');

console.log(`Is fruit not equal to 'banana'? I predict True.`);
console.log(fruit !== 'banana');

// Tests using the lower case function
console.log(`Is the lowercase of fruit equal to 'apple'? I predict True.`);
console.log(fruit.toLowerCase() === 'apple');

// Numerical tests
console.log(`Is number1 equal to number2? I predict False.`);
console.log(number1 === number2);

console.log(`Is number1 greater than number2? I predict True.`);
console.log(number1 > number2);

console.log(`Is number1 less than or equal to number2? I predict False.`);
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log(`Is fruit equal to 'apple' and number1 is greater than number2? I predict True.`);
console.log(fruit === 'apple' && number1 > number2);

console.log(`Is fruit equal to 'banana' or number1 is less than number2? I predict True.`);
console.log(fruit === 'banana' || number1 < number2);

// Test whether an item is in an array
console.log(`Is 'red' in the colors array? I predict True.`);
console.log(colors.includes('red'));

// Test whether an item is not in an array
console.log(`Is 'yellow' not in the colors array? I predict True.`);
console.log(!colors.includes('yellow'));

//25
// Version 1: Alien color is 'green' (passes the if test)
let alien_color0: string = 'green';

if (alien_color0 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else {
    console.log("Sorry, no points earned.");
}

// Version 2: Alien color is 'red' (fails the if test)
alien_color0 = 'red';

if (alien_color0 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else {
    console.log("Sorry, no points earned.");
}

//26
// Version 1: Alien color is 'green' (runs the if block)
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

// Version 2: Alien color is 'red' (runs the else block)
alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

//27
// Version 1: Alien color is 'green'
let alien_color_1: string = 'green';

if (alien_color_1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_1 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

// Version 2: Alien color is 'yellow'
let alien_color_2: string = 'yellow';

if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_2 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

// Version 3: Alien color is 'red'
let alien_color_3: string = 'red';

if (alien_color_3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

//28
let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//29
let favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];

// Check if 'banana' is in the array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

// Check if 'kiwi' is in the array
if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}

// Check if 'apple' is in the array
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

// Check if 'orange' is in the array
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

// Check if 'strawberry' is in the array
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

//30
let usernames: string[] = ['alice', 'bob', 'charlie', 'admin', 'diana'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

//31
let usernames1: string[] = ['admin1', 'Eric', 'Alice', 'John', 'Jane'];

// Check if the list of users is not empty
if (usernames1.length > 0) {
    for (let usernames1 of usernames) {
        if (usernames1.toLowerCase() === 'admin1') {
            console.log("Hello admin1, would you like to see a status report?");
        } else {
            console.log(`Hello ${usernames1}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

//32
let current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
let new_users: string[] = ['Eric', 'john', 'Sarah', 'bob', 'Megan'];

for (let new_username of new_users) {
    // Check if the new username is already in use (case-insensitive)
    if (current_users.some(existing_user => existing_user.toLowerCase() === new_username.toLowerCase())) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}

//33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinalEnding: string;

    if (number === 1) {
        ordinalEnding = 'st';
    } else if (number === 2) {
        ordinalEnding = 'nd';
    } else if (number === 3) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }

    console.log(`${number}${ordinalEnding}`);
}

//34
let favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print the name of each pizza
console.log("List of favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Print a sentence about each pizza
console.log("\nStatements about each pizza:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Print a line about how much you like pizza
console.log("\nI really love pizza!");

//35
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the name of each animal
console.log("List of animals:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a line about what these animals have in common
console.log("\nAny of these animals would make a great pet!");

//36
function make_shirt(size: string, message: string): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function with specific size and message
make_shirt('Large', 'Hello, World!');

//37
function make_shirt1(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Make a large shirt with the default message
make_shirt1();

// Make a medium shirt with the default message
make_shirt1('Medium');

// Make a shirt of any size with a different message
make_shirt('Small', 'Custom message for a small shirt');

//38
function describeCity(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York', 'USA');
describeCity('Tokyo');  // Using the default country

//39
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const result1: string = cityCountry('Lahore', 'Pakistan');
const result2: string = cityCountry('New York', 'USA');
const result3: string = cityCountry('Tokyo', 'Japan');

// Printing the values returned
console.log(result1);
console.log(result2);
console.log(result3);

//40
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for the number of tracks
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title,
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating three albums and printing their information
const album1 = makeAlbum('Artist1', 'Album One');
const album2 = makeAlbum('Artist2', 'Album Two', 12);
const album3 = makeAlbum('Artist3', 'Album Three', 8);

// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);

//41
function showMagicians0(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Example array of magician's names
const magicianNames0: string[] = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];

// Calling the function to show magicians
showMagicians(magicianNames0);

//42
function makeGreat1(magicians: string[]): string[] {
    // Create a new array with modified names
    const greatMagicians: string[] = magicians.map((magician) => `the Great ${magician}`);
    return greatMagicians;
}

// Function to show magicians
function showMagicians1(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Example array of magician's names
const magicianNames1: string[] = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];

// Calling makeGreat to modify the array
const greatMagicianNames2: string[] = makeGreat(magicianNames1);

// Calling showMagicians to display the modified list
showMagicians(greatMagicianNames2);

//43
function makeGreat(magicians: string[]): string[] {
    // Create a copy of the array
    const magiciansCopy: string[] = [...magicians];
    
    // Modify the copied array by adding "the Great" to each name
    const greatMagicians: string[] = magiciansCopy.map((magician) => `the Great ${magician}`);
    
    return greatMagicians;
}

// Function to show magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Example array of magician's names
const magicianNames: string[] = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];

// Calling makeGreat with a copy of the array to modify
const greatMagicianNames: string[] = makeGreat(magicianNames);

// Calling showMagicians with the original array
console.log("Original Magicians:");
showMagicians(magicianNames);

// Calling showMagicians with the modified array
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);

//44
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items!");
    } else {
        console.log(`You ordered a sandwich with: ${items.join(', ')}`);
    }
    console.log(); // Adding a newline for better formatting
}

// Calling the function three times with different numbers of arguments
orderSandwich('Ham', 'Cheese', 'Lettuce');
orderSandwich('Turkey', 'Swiss');
orderSandwich();

//45
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; // Allow any additional properties as key-value pairs
}

function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    const car: Car = { manufacturer, model };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Calling the function with required information and additional key-value pairs
const myCar: Car = createCar('Toyota', 'Camry', ['color', 'blue'], ['optionalFeature', 'Sunroof']);

// Printing the created car object
console.log(myCar);







