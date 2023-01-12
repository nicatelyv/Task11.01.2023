import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { bolme, decrement, increment, vurma } from '../Store/counterSlice'
function CounterController() {
    const inp1 = useRef()
    const inp2 = useRef()
    const dispatch = useDispatch()
    return (
        <div className='main'>
            <div className='inps'>
                <input ref={inp1} type={"number"} />
                <input ref={inp2} type={"number"} />
            </div>
            <div className='buttons'>
                <button onClick={() => { dispatch(increment({ inp1: inp1.current.value, inp2: inp2.current.value })) }}>+</button>
                <button onClick={() => { dispatch(decrement({ inp1: inp1.current.value, inp2: inp2.current.value })) }}>-</button>
                <button onClick={() => { dispatch(vurma({ inp1: inp1.current.value, inp2: inp2.current.value })) }}>*</button>
                <button onClick={() => { dispatch(bolme({ inp1: inp1.current.value, inp2: inp2.current.value })) }}>/</button>
            </div>
        </div>
    )
}

export default CounterController