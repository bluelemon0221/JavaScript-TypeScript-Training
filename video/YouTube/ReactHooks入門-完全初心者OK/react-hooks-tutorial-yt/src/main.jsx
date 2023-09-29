import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const shincodeInfo = {
  name: "shincode",
  age: 24,
};

const ShinCodeInfo = createContext(shincodeInfo)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShinCodeInfo.Provider value={shincodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeInfo.Provider>
)
export default ShinCodeInfo;
