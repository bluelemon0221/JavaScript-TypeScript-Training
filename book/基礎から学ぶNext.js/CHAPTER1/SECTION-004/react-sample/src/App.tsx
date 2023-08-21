// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// import { Component } from './Component';


function App() {
  const [inputValue, setInputValue] = useState<string>('defualtValue');
  // useEffect--------------------
  // const [response, setResponse] = useState<Response | null>(null);
  // useEffect(
  //   () => {
  //     const controller = new AbortController();
  //     fetch('/api/data/list', {
  //       method: 'POST',
  //       body: JSON.stringify({ inputValue }),
  //       signal: controller.signal
  //     }).then((response) => {
  //       setResponse(response);
  //     });
  //     return () => {
  //       controller.abort();
  //     };
  //   },
  //   [inputValue]
  // );
  // -------------useEffect
  return (
    <div className='App'>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <div>{inputValue}</div>
    </div>
  )
}

export default App;
