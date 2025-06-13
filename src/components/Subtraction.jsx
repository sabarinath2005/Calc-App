import React, { useState } from 'react'
import Navbar from './Navbar'

const Subtraction = () => {

    const[input, setInput]=useState(
        { num1 : 0 , num2 : 0 }
    )


    const [result, setResult]=useState(0)



    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    

    const readValue=()=>{
        console.log(input)
        let difference= parseInt(input.num1) - parseInt(input.num2)
        setResult(difference)
    }


  return (
    <div>

       <Navbar/> <br />

      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

             <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Number 1</label>
                    <input name='num1' value={input.num1} onChange={inputHandler} type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Number 2</label>
                    <input name='num2' value={input.num2} onChange={inputHandler} type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readValue} className="btn btn-primary">Find Difference</button>
                </div>

                <div>
                    <h2><p>Difference={result}</p></h2>
                </div>



             </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Subtraction