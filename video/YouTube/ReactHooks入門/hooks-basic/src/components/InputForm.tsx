import React, { useState } from 'react'

const InputForm: React.VFC = () => {
    const [name, setName] = useState({ first: '', last: '' });
    return (
        <div>
            <input value={name.first} onChange={(e)=>setName((prevName)=>({first:e.target.value,last: prevName.last}))}/>
            <input value={name.last} onChange={(e)=>setName((prevName)=>({last:e.target.value,first: prevName.last}))}/>
            <p>{name.first}</p>
            <p>{name.last}</p>
        </div>
    )
}

export default InputForm