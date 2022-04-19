import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

function UseImperativeHandle(props, ref) {
    const [state, setState] = useState('');
  const inputEl = useRef();
  useImperativeHandle(ref, () => ({
    focus() {
        inputEl.current.focus()
    }
}))
//   useImperativeHandle(ref, () => (
//         inputEl.current.value
// ))
    return (
    <div>
        UseImperativeHandle
        <input type="text" title='abc' onChange={(e)=> setState(e.target.value)} ref={inputEl}/>
    </div>
  )
}

export default forwardRef(UseImperativeHandle)