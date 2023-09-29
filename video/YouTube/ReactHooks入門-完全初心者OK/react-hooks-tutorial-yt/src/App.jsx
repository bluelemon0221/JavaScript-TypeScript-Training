import { useReducer, useRef, useState, useMemo } from 'react';
import './App.css'
import { useEffect, useContext } from 'react';
import ShinCodeInfo from './main';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeInfo)
  const ref = useRef()
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Hello Hooks');
    // setCount(count + 1);
  }, [count])

  const handleRef = () => {
    console.log(ref.current.value);
  }

  //useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);


  // const square = () => {
  //   let i = 0;
  //   while (i<20000000000000000){
  //     i++;
  //     return count02 * count02;
  //   }
  // }

  const square = useMemo(() => {
    let i = 0;
    while (i < 20000) {
      i++;
    }
    console.log('Clicked!');
    return count02 * count02;
  }, [count02]);

  return (
    <>
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>
      <hr />
      <h1>useRef</h1>
      <input type='text' ref={ref} />
      <button onClick={handleRef}>UseRef</button>
      <hr />
      <h1>useReducer</h1>
      <p>カウント:{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <hr />
      <h1>useMemo</h1>
      <div>カウント1: {count01}</div>
      <div>カウント2: {count02}</div>
      <div>結果:{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>
    </>
  )
}

export default App
