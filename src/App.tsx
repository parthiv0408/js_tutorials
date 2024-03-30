import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ch1 from './pages/Ch1'

function App() {
  const [count, setCount] = useState(0)
  // Prectice
  // console.log("Hello")
  // let aa = 23
  // console.log(aa)
  // aa = 55
  // Var let And const
  // const a = 12
  // const b = "hello"
  // const c = null
  // const d = undefined

  {
    const b = "this"
    console.log(b)
  }

  // console.log(b)
  // console.log(a)
  // console.log(c)
  // console.log(d)

  // Primitive Data Types (7 Data Types)
  // Null
  // Number
  // Symbol
  // String
  // Boolean
  // Bigint
  // Undefine

  // const a1 = null;
  // const b1 = 213;
  // const c1 = Symbol("Hello Symbol");
  // const d1 = "Hello";
  // const e1 = true;
  // const f1 = BigInt("240") + BigInt("5");
  // const g1 = undefined;

  // console.log("*******", a1)
  // console.log("*******", b1)
  // console.log("*******", c1)
  // console.log("*******", d1)
  // console.log("*******", e1)
  // console.log("*******", f1)
  // console.log("*******", g1)
  // console.log(typeof g1)


  // Object Js
  // const item = {
  //   "Name": "Hello",
  //   "Kenil": undefined,
  //   "bool": true,
  // }
  // console.log(item)

  return (
    <>
      <Ch1 />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
