const obj = {
    name: "Alice",
    regularFunction: function() {
      console.log(this.name); // "Alice"
    },
    arrowFunction: () => {
      console.log(this.name); // undefined or value from outer scope, depending on context
    }
  };
 
  
  obj.regularFunction(); // "Alice"
  obj.arrowFunction(); // undefined (or an outer value)

//   When It's Useful:

// This behavior is particularly useful in situations where you want to preserve the this value from the outer context, such as when using callbacks or within methods of classes.
// Example in a Callback:


function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

const timer = new Timer();
  