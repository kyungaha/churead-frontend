import React, { useEffect, useState } from 'react'
import Greeting from '../components/sample/Greeting'

const Sample = () => {
    // logic
    const handeleButtonClick= (data) => {
        console.log("click!", data);
    }

    const [userNames, setUserNames] = useState([]);
    useEffect(() => {
        // 컴포넌트 생성 시 딱 한번만 실행
        const nameDatas = ["kong", "하경아", "kyunga"];
        setUserNames(nameDatas);
    }, []);
    
    // view
    return (
    <div>Sample
        {userNames.map((userName, index) => <Greeting key={`userName${index}`} name={userName} onButtonClick={handeleButtonClick}/>)}
        {/* <Greeting name="kong" onButtonClick={handeleButtonClick}/>
        <Greeting name="하경아" onButtonClick={handeleButtonClick}/>
        <Greeting name="kyunga" onButtonClick={handeleButtonClick}/> */}
    </div>
    
  )
}

export default Sample