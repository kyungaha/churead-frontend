import React from 'react'
import Greeting from '../components/sample/Greeting'

const Sample = () => {
    // logic
    const handeleButtonClick= (data) => {
        console.log("click!", data);
    }
    
    // view
    return (
    <div>Sample
        <Greeting name="kong" onButtonClick={handeleButtonClick}/>
        <Greeting name="하경아" onButtonClick={handeleButtonClick}/>
        <Greeting onButtonClick={handeleButtonClick} />
    </div>
    
  )
}

export default Sample