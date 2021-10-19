
// Function, Arrow Function and "this"

const X = function() {
    // "this" here is the caller of X
};

const Y = () => {
    // "this" here is NOT the caller of Y
    
    // It's the same "this" found in Y's scope
    
};

/**
 * Regular functions give acces to their "calling" environment
 * while arrow functions give access to their "defining" environment
 * 
 * The value of the "this" keyword inside a regular function depends on how the function was called "the object that made the call"
 * 
 * The value of the "this" keyword inside an arrow function depends on where the function was defined " the scope that defined the function"
 * 
 **/
 
