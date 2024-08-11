
const Ch2 = () => {
    console.log("CH 2")
    // console.log("1: Use Logical Operator to find the age of a person lies between 10 and 20");

    // let age =prompt("What is your age?");
    // if(age>10 && age<20){
    //   console.log("Your age lies between 10 and 20");
    // }else{
    //   console.log("Your age dosent lies between 10 and 20");
    // }

    console.log("2: Demonstarte the use of switch cash statement in javascript");
    let age = prompt("What is your age?");
    switch (age) {
      case '12':
        console.log("Tour age is 12")
        break;
        case '13':
        console.log("Tour age is 13")
        break
        case '14':
        console.log("Tour age is 14")
        break
    
      default:
        console.log("Your age is not special")
        break;
    }


    console.log("3: Write a javascript program to find a number is divisable by 2 and 3"); 
let num = prompt("What is your Number?");
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
  console.log("Your number is divisible by 2 and 3");
}else{
  console.log("Your number is not divisible by 2 and 3");
}
   */
// let sum =0;
// let b = prompt("Enter sum value: ");
// const n = Number.parseInt(b);
// for(let i=0;i<b;i++){
//   sum += (i+1);
// }
// console.log("Sum First"+ b +"number is" + sum) 

let array = [-10, -0.20, 0.30, -40, -50];
 
// Method (return element > 0).
let found = array.find(function (element) {
    return element > 0;
});
 
// Printing desired values.
console.log(found);
  return (
    <div>
       <div>Ch2</div>
    </div>
  )
}

export default Ch2
