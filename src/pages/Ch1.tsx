import React from 'react'

const Ch1 = () => {
  console.log("Chapter 1 Tutorials")
  console.log("Q.1 : Create a vabiable of type String and try to add number to it")
  let a = "Hello";
  let b = 12;
  console.log(a + b)

  console.log("Q.2 : Type of Operator to find a data type of the String in last String")
  console.log(typeof (a + b))

  console.log("Q.3 : Create a const object in javascript can you change it to hold a number later")
  const c = {
    name: "Hello",
    section: 1,
    helloBool: true,
  }
  // c.name = 23;

  console.log("Q.4 : Try to add a new key to the const object in problem 3. where youa let to do it?")
  c.name = "Denish Bhau";

  console.log("Q.5 : Write a js program to create a word - Meaning Dictionary of 3 word")
  const dict = {
    name: "name",
    dictionary: "Dictionary"
  }
  console.log(dict.dictionary)
  return (
    <div>Ch1</div>

  )
}

export default Ch1