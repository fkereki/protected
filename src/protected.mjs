// Define a unique Symbol for the protected attribute
const protectedAttribute = Symbol('protectedAttribute');

class MyClass {
  constructor(value) {
    // Use the Symbol to define the "protected" attribute
    this[protectedAttribute] = value;
  }

  // Method to get the value of the protected attribute
  getProtectedAttribute() {
    return this[protectedAttribute];
  }

  // Method to set the value of the protected attribute
  setProtectedAttribute(value) {
    this[protectedAttribute] = value;
  }
}

// Export the class
export { MyClass };

// Se podrá hacer un decorador que agregue esto a una clase?
// Se podrá hacer algo por lo de Object.getOwnPropertySymbols?
// Funciona la herencia? (parece que sí...)
// Se pueden hacer getter y setter para no tener que usar [protectedAttribute] todo el tiempo?

/*
Key Points:
Symbols: Used to create a unique and hidden property key for the "protected" attribute.
Encapsulation: The protectedAttribute is not accessible by regular property access, providing a level of encapsulation.
Reflection: While technically accessible via Object.getOwnPropertySymbols, this approach discourages accidental access.
This pattern provides a good way to simulate "protected" attributes in JavaScript, ensuring they are not easily accessed or modified from outside the class.
*/
