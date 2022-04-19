import React, {useRef, useState } from 'react'
import UseEffects from './UseEffect';
import UseImperativeHandle from './UseImperativeHandle';


function Blog() {
  const hh = 1;
  const hh1 = 3;
  const hh2 = 2;

  const [state, setState] = useState([hh,hh1,hh2])
    const handleClick = () => {
      console.log(state)
    }
    
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Blog