import React, { useReducer } from 'react'

//1. initstate
//job sẽ nhận giá trị khi ta onChange value
//jobs sẽ lưu list
const ininstate = {
    job: '',
    jobs: []
};
//2. action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return{
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return{
        type: ADD_JOB,
        payload
    }
}
//3. reducer
const reducer = (state, action) => {
    let newState
    switch(action.type){
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                job: [...state.jobs, action.payload]
            }
            break    
        default:
            throw new Error('Invalid action.')
    }
    return newState
}
//4. dispath

function UseReducer() {
    const [state, dispath] = useReducer(reducer, ininstate);
    
    const {job , jobs} = state;
    const handleSubmit = () =>{
        dispath(addJob(job))
    }
    return (
    <div>
        <input type="text" 
            value={job}
            onChange={e=>{dispath(setJob(e.target.value))}}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
            {
                jobs.map((job, index)=>(<li key={index}>{job} &times;</li>))
            }
        </ul>
    </div>
  )
}

export default UseReducer