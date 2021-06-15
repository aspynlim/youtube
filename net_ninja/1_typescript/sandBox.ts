const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
})

let character = 'test';
character = 'jo';

const circ = (diameter: number) => {
  return diameter * Math.PI
};

console.log(circ(100));