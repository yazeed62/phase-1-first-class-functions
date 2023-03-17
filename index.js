let spy = () => console.log("hello");

function receivesAFunction(spy) {
  let chai = spy();
  return chai;
}

function returnsANamedFunction() {
  let apple = function() {
    console.log("hello");
  };
  return apple;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function.");
  };
}

// Example usage:
let anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); // logs "This is an anonymous function."
