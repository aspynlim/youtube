let colors = ['red', 23];
colors.push(true); // Method : function on an object

for(let color of colors){
  console.log(color);
}
console.log([...colors]); // ["red", 23, true]
colors.shift(); // remove the first item in the array

console.log([...colors]); // [23, true]
colors.pop(); // remove the last item in the array

console.log([...colors]); // [23]
console.log(colors.length);