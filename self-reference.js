'use strict';
function personMaker() {
  let person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function (){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}
console.log(personMaker().fullName());