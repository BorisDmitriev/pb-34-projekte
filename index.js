// The Fortune Teller
const tellFortune = (numberOfChildren, PartnersName, geoLocation, jobTitle) => `"You will be a ${jobTitle} in ${geoLocation}, and married to ${PartnersName} with ${numberOfChildren} kids`;

console.log(tellFortune(1,"Marygold","USA","IT"));
console.log(tellFortune(4,"'Alva'","Poland","Shop assistant"));
console.log(tellFortune(3,"Judith","Poland","Shop assistant"));

// The Puppy Age Calculator
const CONVERSION_RATE = 7;
const calculateDogAge = puppyHumanYears => `Your doggie is ${puppyHumanYears*CONVERSION_RATE} years old in dog years!`;
console.log(calculateDogAge(3));
console.log(calculateDogAge(5));
console.log(calculateDogAge(2));
//bonus
const calculateDogAge2 = (puppyHumanYears, conversionRate = 7) => `Your doggie is ${age*conversionRate} years old in dog years!`;


// The Lifetime Supply Calculator
const MAX_AGE = 100;
const calculateSupply = (age, amount) => `You will need ${(MAX_AGE-age)*365*amount} to last you until the ripe old age of ${MAX_AGE}`;
console.log(calculateSupply(35,2));
//bonus
const MAX_AGE2 = 100;
const calculateSupply2= (age, amount) => `You will need ${ Math.floor( (MAX_AGE-age)*365*amount ) } to last you until the ripe old age of ${MAX_AGE}2`;
console.log(calculateSupply2(35, 0.58));


// The Geometrizer
const calcCircumference = radius => `The circumference is ${2*Math.pi*radius}`;
const calcArea = radius => `The area is ${Math.pi*Math.pow(radius,2)}`;

// The Temperature Converter
const celsiusToFahrenheit = cel => `${cel}°C is ${cel/5*9+32}°F`;
const cel = 12;

const fahrenheitToCelsius = far => `${far}°F is ${ (far-32)*5/9 }°C`;
const far = 12;
