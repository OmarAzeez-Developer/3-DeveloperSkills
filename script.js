// activate strict mode
'use strict';

// Using Google, StackOverFlow and MDN
/*
// Problem-1
// We work for a company buililding a smart home thermometer. our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature ampltude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9,5];

const calcTempAmplitude = function(temps) {

// place holder
let max = temps[0];
let min = temps[0];

// loop through the array to find the biggest number in the array
for (let i = 0; i < temps.length; i++) {
    // ignore anything is not a number in the array and continue
    if (typeof temps[i] !== "number") continue;
    // largest
    if (temps[i] > max) {
        max = temps[i];
    } 
    // smallest
    if (temps[i] < min) {
        min = temps[i];
    }
}
// console.log(`Largest Value is ${max}`);
// console.log(`Smallest Value is ${min}`);

return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// ------------------------------------------------------------------------------------------------ //

// Problem-2
// Function should now receive 2 arrays of temps

const temp1 = [1, 2, 3];
const temp2 = [4, 5, 6, 7, 8];

const calcTempAmplitudeNew = function(t1, t2) {
// merge t1 and t2
const t3 = t1.concat(t2);
// place holder
let max = t3[0];
let min = t3[0];

// loop through the array to find the biggest number in the array
for (let i = 0; i < t3.length; i++) {
    // ignore anything is not a number in the array and continue
    if (typeof t3[i] !== "number") continue;
    // largest
    if (t3[i] > max) {
        max = t3[i];
    } 
    // smallest
    if (t3[i] < min) {
        min = t3[i];
    }
}
// console.log(`Largest Value is ${max}`);
// console.log(`Smallest Value is ${min}`);

return max - min;
}

const amplitudeNew = calcTempAmplitudeNew(temp1, temp2);
console.log(amplitudeNew);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Debugging with the Console and Breakpoints
/*
// function
const measureKelvin = function () {
    // object
    const measurement = {
        type: "temp",
        unit: "celsius",
        // always remember that (prompt) return string evem if you enter a number so input 7 ==> output "7"
        // fix the bug by converting string to a number
        value: Number(prompt("Enter degree in Celsius: ")),
    };

    // find the bug
    console.log(measurement);
    console.table(measurement);

    console.log(measurement.value);
    console.warn(measurement.value);
    console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

// identify the bug
console.log(measureKelvin());
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1
/*
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5,0, 4];

const printForecast = function(arr) {
    // place holder
    let placeHolder = "";
    for (let i = 0; i < arr.length; i++) {
        
        // placeHolder = placeHolder + `${arr[i]}C in ${i+1} days ... `;
        placeHolder += `${arr[i]}C in ${i+1} days ... `;
        
    }
    console.log("..." + placeHolder);
};

printForecast(arr1);
*/