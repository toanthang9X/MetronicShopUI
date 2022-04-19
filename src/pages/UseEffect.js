import React, { useEffect, useState } from 'react'

function UseEffects() {
    const [title, setTitle] = useState('useEffect')
    //3. useEffect(effectFunction,[des])
    useEffect(()=>{
        document.title = title
    },[title])
    
    return (
    <div>
        <p>Title: {title}</p>
        <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
    </div>
  )
}

export default UseEffects