import React, { useState } from 'react'
import Navbar from './Navbar'

const Voting = () => {

    const [input, setInput]= useState(
        { age : "" }
    )

    const [result, setResult]=useState()
    


    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        const age = parseInt(input.age)
        if (age>=18)
        {
            setResult('Eligible to vote')
        }
        else
        {
           setResult('Not eligible to vote')

        }

       
    }

  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label mt-4">Age</label>
                        <input placeholder='Enter Age' name='age' value={input.age} onChange={inputHandler} type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">Check Status</button>
                    </div>
                    <div>
                        <h2><p>{result}</p></h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Voting