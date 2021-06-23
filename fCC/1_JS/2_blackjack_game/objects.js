let course = {
  title: 'CSS Grid',
  level: 2,
  isFree: true,
  tags: ['HTML', 'CSS'],
  sayHello: function(){
    return 'hello';
  }
}

console.log(course.tags);

// Method : Function attached to an object
console.log(course.sayHello());