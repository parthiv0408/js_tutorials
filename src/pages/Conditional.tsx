import React from 'react'

function Conditional() {
    let a = prompt("Hey whats your age?")
    a = Number.parseInt(a);
    console.log(a);
  return (
    <div>
       Conditional
    </div>
  )
}

export default Conditional
