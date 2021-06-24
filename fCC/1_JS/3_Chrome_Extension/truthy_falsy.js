// truthy vs falsy value
// falsy values in JS : 0, "", null, undefined, false, NaN
// null : how you as a developer signalize emptiness
// undefined : how JS signalizes emptiness

// condition ? true : false;
undefined ? console.log("true") : console.log("false");

let currentViewers = null; // false
currentViewers = []; // true
currentViewers ? console.log("yay!") : console.log("no one...");

let currentViewers2; // false (undefined)
console.log(Boolean(currentViewers2));

console.log("-------------------");

console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(100)); // true
console.log(Boolean(null)); // false
console.log(Boolean([0])); // true
console.log(Boolean(-0)); // false
