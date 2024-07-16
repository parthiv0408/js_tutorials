import React from 'react'

function Conditional() {
    const a = prompt("Hey whats your age?")
    a = Number.parseInt(a);
    console.log(a);
    if (a<0) {
      alert("This is an invalid age");
    }else if(a<9){
      alert("you are kid");
    }else if (a<18 && a>=9) {
      alert("you are kid driving after 18");
    }else{
      alert("You can now drive");
    }
console.log("hello",a<18?"not":"Yes")


function findLargestElement(nestedArray) {

  let largest = nestedArray[0][0];

  for (let arr of nestedArray) {

    for (let num of arr) {

      if (num > largest) {

        largest = num;

      }

    }

  }

  return largest;

function isOdd(number) {
    return number % 2 !== 0;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(isOdd(5));  // true
console.log(isEven(10)); // true


}


  return (
    <div>
       Conditional
    </div>
  )
}

export default Conditional
