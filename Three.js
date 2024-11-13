import React ,{useState}from 'react'

const Three = () => {
    const [input,setInput] = useState("");
  return (
    <div>
        <input type='text' onChange={(ele)=>setInput(ele.target.value)}></input>
        <p>User Input : {input}</p>
    </div>
  )
}

export default Three