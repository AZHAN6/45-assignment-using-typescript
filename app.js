var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 2
var personName0 = "Eric";
console.log("Hello ".concat(personName0, ", would you like to learn some Python today?"));
//3
var personName2 = "Azhan Qaiser";
// Print in lowercase
console.log("Lowercase: " + personName2.toLowerCase());
// Print in uppercase
console.log("Uppercase: " + personName2.toUpperCase());
// Print in titlecase
console.log("Titlecase: " + personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());
// 4
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// 5
var famous_person = "Albert Einstein";
var quote2 = "A person who never made a mistake never tried anything new.";
var message1 = "".concat(famous_person, " once said, \"").concat(quote2, "\"");
console.log(message1);
//6
var personNameWithWhitespace = "\t \n Azhan Qaiser \t \n";
// Print name with whitespace
console.log("Name with Whitespace: '" + personNameWithWhitespace + "'");
// Strip whitespace and print the name
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped Name: '" + strippedName + "'");
//7
// Addition
var additionResult = 5 + 3;
console.log("Addition: 5 + 3 =", additionResult);
// Subtraction
var subtractionResult = 10 - 2;
console.log("Subtraction: 10 - 2 =", subtractionResult);
// Multiplication
var multiplicationResult = 4 * 2;
console.log("Multiplication: 4 * 2 =", multiplicationResult);
// Division
var divisionResult = 16 / 2;
console.log("Division: 16 / 2 =", divisionResult);
//8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//9
// Store your favorite number in a variable
var favoriteNumber = 2; // Replace 7 with your actual favorite number
// Create a message revealing your favorite number
var message = "My favorite number is: ".concat(favoriteNumber);
// Print the message
console.log(message);
//10
// name:- Azhan Qaiser       //date:-3-5-24
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// name:- Azhan Qaiser       //date:-3-5-24
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//11
// Array of friends' names
var names1 = ["Anzal", "Ahad", "Arham", "Abd ur rehman", "Burhan"];
// Print each person's name one at a time
for (var i = 0; i < names1.length; i++) {
    console.log("Friend ".concat(i + 1, ": ").concat(names1[i]));
}
//12
// Array of friends' names
var names = ["Anzal", "Ahad", "Arham", "Abd ur rehman", "Burhan"];
// Personalized greeting for each person
for (var i = 0; i < names.length; i++) {
    console.log("Hello, ".concat(names[i], "! Have a great day!"));
}
//13
// Array of favorite modes of transportation
var favoriteTransportation = ["Tesla Model S", "Harley-Davidson Motorcycle", "Honda CG 125", "Vespa Scooter", "BMW M5"];
// Print statements about each item in the array
favoriteTransportation.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//14
// Array of people to invite to dinner
var guestList = ["Shafiq Chacha", "Aslam taya", "Saad bhai"];
// Print invitations to each person
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]"));
});
//15
// Array of people to invite to dinner
var guestList0 = ["Shafiq Chacha", "Aslam taya", "Saad bhai"];
// Print invitations to each person
guestList0.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]"));
});
// Simulate a guest who can't make it
var unableToAttend0 = "Shafiq Chacha";
console.log("Unfortunately, ".concat(unableToAttend0, " can't make it to the dinner.\n"));
// Replace the guest who can't make it with a new guest
var newGuest1 = "Azhar taya";
var indexOfUnableToAttend0 = guestList.indexOf(unableToAttend0);
if (indexOfUnableToAttend0 !== -1) {
    guestList[indexOfUnableToAttend0] = newGuest1;
}
// Print second set of invitations with the updated guest list
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]"));
});
//16
// Original array of people to invite to dinner
var originalGuestList1 = ["Aslam taya", "Saad bhai", "Azhar taya"];
// Print invitations to each person
originalGuestList1.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]"));
});
// Simulate a guest who can't make it
var unableToAttend = "Aslam taya";
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to the dinner.\n"));
// Replace the guest who can't make it with a new guest
var newGuest = "Ahad bhai";
var indexOfUnableToAttend = originalGuestList1.indexOf(unableToAttend);
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
originalGuestList1.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]"));
});
//17
// Original array of people to invite to dinner
var originalGuestList = ["Azhar taya", "Saad bhai", "Ahad bhai", "Usman", "Damil", "Arham"];
// Print invitations to each person
originalGuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have your presence and engage in insightful conversations.\nSincerely, [Your Name]"));
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
    var removedGuest = originalGuestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to each of the two remaining people
originalGuestList.forEach(function (remainingGuest) {
    console.log("Dear ".concat(remainingGuest, ",\nYou are still invited to dinner. We look forward to seeing you!\nSincerely, [Your Name]"));
});
// Remove the last two names to have an empty list
originalGuestList.pop();
originalGuestList.pop();
// Print the final state of the list
console.log("Final guest list:", originalGuestList);
//18
// Define the array of places to visit
var placesToVisit = ["Tokyo", "Paris", "New York", "Sydney", "Marrakech"];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order
console.log("Original order after sorting:", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
//19
// Define the array of dinner guests
var dinnerGuests = ["Anzal", "Ahad", "Arham", "Abd ur rehman", "Burhan"];
// Print the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(dinnerGuests.length));
//20
// Create an array of countries
var countries = ["USA", "Canada", "Australia", "Japan", "Germany"];
// Print the array of countries
console.log("List of countries:", countries);
//21
// Create objects containing information about countries
var usa = {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    language: "English"
};
var canada = {
    name: "Canada",
    capital: "Ottawa",
    population: 38005238,
    language: "English, French"
};
var australia = {
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
var fruits = ["Apple", "Banana", "Orange", "Grapes"];
// Intentionally access an out-of-bounds index to create an error
var invalidIndex = 5;
console.log("Attempting to access an invalid index:", fruits[invalidIndex]);
// Correct the error by accessing a valid index
var validIndex = 2;
console.log("Accessing a valid index:", fruits[validIndex]);
//23
var car = 'subaru';
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
var fruit = 'apple';
var number1 = 10;
var number2 = 5;
var colors = ['red', 'green', 'blue'];
// Tests for equality and inequality with strings
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit === 'apple');
console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit !== 'banana');
// Tests using the lower case function
console.log("Is the lowercase of fruit equal to 'apple'? I predict True.");
console.log(fruit.toLowerCase() === 'apple');
// Numerical tests
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("Is fruit equal to 'apple' and number1 is greater than number2? I predict True.");
console.log(fruit === 'apple' && number1 > number2);
console.log("Is fruit equal to 'banana' or number1 is less than number2? I predict True.");
console.log(fruit === 'banana' || number1 < number2);
// Test whether an item is in an array
console.log("Is 'red' in the colors array? I predict True.");
console.log(colors.includes('red'));
// Test whether an item is not in an array
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));
//25
// Version 1: Alien color is 'green' (passes the if test)
var alien_color0 = 'green';
if (alien_color0 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log("Sorry, no points earned.");
}
// Version 2: Alien color is 'red' (fails the if test)
alien_color0 = 'red';
if (alien_color0 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log("Sorry, no points earned.");
}
//26
// Version 1: Alien color is 'green' (runs the if block)
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Version 2: Alien color is 'red' (runs the else block)
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
//27
// Version 1: Alien color is 'green'
var alien_color_1 = 'green';
if (alien_color_1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_1 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Version 2: Alien color is 'yellow'
var alien_color_2 = 'yellow';
if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_2 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Version 3: Alien color is 'red'
var alien_color_3 = 'red';
if (alien_color_3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
//28
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//29
var favorite_fruits = ['banana', 'apple', 'strawberry'];
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
var usernames = ['alice', 'bob', 'charlie', 'admin', 'diana'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//31
var usernames1 = ['admin1', 'Eric', 'Alice', 'John', 'Jane'];
// Check if the list of users is not empty
if (usernames1.length > 0) {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var usernames1_1 = usernames_2[_a];
        if (usernames1_1.toLowerCase() === 'admin1') {
            console.log("Hello admin1, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames1_1, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
//32
var current_users = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
var new_users = ['Eric', 'john', 'Sarah', 'bob', 'Megan'];
var _loop_1 = function (new_username) {
    // Check if the new username is already in use (case-insensitive)
    if (current_users.some(function (existing_user) { return existing_user.toLowerCase() === new_username.toLowerCase(); })) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
};
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_username = new_users_1[_b];
    _loop_1(new_username);
}
//33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log("".concat(number).concat(ordinalEnding));
}
//34
var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Print the name of each pizza
console.log("List of favorite pizzas:");
for (var _d = 0, favoritePizzas_1 = favoritePizzas; _d < favoritePizzas_1.length; _d++) {
    var pizza = favoritePizzas_1[_d];
    console.log(pizza);
}
// Print a sentence about each pizza
console.log("\nStatements about each pizza:");
for (var _e = 0, favoritePizzas_2 = favoritePizzas; _e < favoritePizzas_2.length; _e++) {
    var pizza = favoritePizzas_2[_e];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print a line about how much you like pizza
console.log("\nI really love pizza!");
//35
var animals = ['Dog', 'Cat', 'Rabbit'];
// Print the name of each animal
console.log("List of animals:");
for (var _f = 0, animals_1 = animals; _f < animals_1.length; _f++) {
    var animal = animals_1[_f];
    console.log(animal);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var _g = 0, animals_2 = animals; _g < animals_2.length; _g++) {
    var animal = animals_2[_g];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a line about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
//36
function make_shirt(size, message) {
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Call the function with specific size and message
make_shirt('Large', 'Hello, World!');
//37
function make_shirt1(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Make a large shirt with the default message
make_shirt1();
// Make a medium shirt with the default message
make_shirt1('Medium');
// Make a shirt of any size with a different message
make_shirt('Small', 'Custom message for a small shirt');
//38
function describeCity(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York', 'USA');
describeCity('Tokyo'); // Using the default country
//39
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with three city-country pairs
var result1 = cityCountry('Lahore', 'Pakistan');
var result2 = cityCountry('New York', 'USA');
var result3 = cityCountry('Tokyo', 'Japan');
// Printing the values returned
console.log(result1);
console.log(result2);
console.log(result3);
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums and printing their information
var album1 = makeAlbum('Artist1', 'Album One');
var album2 = makeAlbum('Artist2', 'Album Two', 12);
var album3 = makeAlbum('Artist3', 'Album Three', 8);
// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);
//41
function showMagicians0(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example array of magician's names
var magicianNames0 = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];
// Calling the function to show magicians
showMagicians(magicianNames0);
//42
function makeGreat1(magicians) {
    // Create a new array with modified names
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Function to show magicians
function showMagicians1(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example array of magician's names
var magicianNames1 = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];
// Calling makeGreat to modify the array
var greatMagicianNames2 = makeGreat(magicianNames1);
// Calling showMagicians to display the modified list
showMagicians(greatMagicianNames2);
//43
function makeGreat(magicians) {
    // Create a copy of the array
    var magiciansCopy = __spreadArray([], magicians, true);
    // Modify the copied array by adding "the Great" to each name
    var greatMagicians = magiciansCopy.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example array of magician's names
var magicianNames = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];
// Calling makeGreat with a copy of the array to modify
var greatMagicianNames = makeGreat(magicianNames);
// Calling showMagicians with the original array
console.log("Original Magicians:");
showMagicians(magicianNames);
// Calling showMagicians with the modified array
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
//44
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items!");
    }
    else {
        console.log("You ordered a sandwich with: ".concat(items.join(', ')));
    }
    console.log(); // Adding a newline for better formatting
}
// Calling the function three times with different numbers of arguments
orderSandwich('Ham', 'Cheese', 'Lettuce');
orderSandwich('Turkey', 'Swiss');
orderSandwich();
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Calling the function with required information and additional key-value pairs
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['optionalFeature', 'Sunroof']);
// Printing the created car object
console.log(myCar);
