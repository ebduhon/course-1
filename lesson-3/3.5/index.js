
// Destructuring and Rest/Spread


// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// const { PI, E, SQRT2 } = Math;

// Somewhere in react app
// const { Component, Fragment, useState } = require('react');
// useState();

// Destructuring also works inside function arguments
// if the argument passed to a function is an object instead of using the name of the obejct you can use the destructuring syntax
// destructured arguments can also be defined with defaults like regular arguments

// const circle = {
//     label: 'circleX',
//     radius: 2
// };

// const circleArea = ({radius}, {precision = 2} = {}) => {
//     (Math.PI * radius * radius).toFixed(precision);
// };

// console.log(circleArea(circle, { precision: 5 }));

// const [first, second,, fourth] = [10, 20, 30, 40];

// const [value setValue] = useState(initialValue);

// const [first, ...restOfItems] = [10, 20, 30, 40];

//####

// const data = {
//     temp1: '001',
//     temp2: '002',
//     firstName: 'John',
//     lastName: 'Doe'
// };

// const { temp1, temp2, ...person } = data;

//spread
// const newArray = [...restOfItems];

// const newObject = {
//     ...person
// };
