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


//     const expr = prompt("Hey whats ?");
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

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

}


  return (
    <div>
       Conditional
    </div>
  )
}

export default Conditional
