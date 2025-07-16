import React from 'react'


// 사용자의 이름을 입력받아서 인사 문구와 함께 메시지를 보여주는 컴포넌트
const Greeting = ({name = "??", age=1,
    onButtonClick, event}) => {
 // logic
 // my data
 // PascalCase : MyData
 // camelCase: myData
 // snake-case : my-data
//  let userName = "kong"

// state반환값 : 첫번째 - 데이터, 두번째 - 함수 
// const [userName, setUserName] = useState(name);
// console.log("🚀 ~ Greeting ~ userName:", userName);

 const handleClick = () => {
    // 데이터 수정
    // userName = userName.toUpperCase();
    // console.log("🚀 ~ handleClick ~ userName:", userName)
    // setUserName(userName.toUpperCase());
    onButtonClick(name);
 }

  // view
  return (
    <div>
        <p>{name}님! 반갑습니다.</p>
        <p>오늘도 좋은하루되세요.😛</p>
        <button type='button' className='border border-white' onClick={handleClick}>대문자로 수정</button>
    </div>
  )
}

export default Greeting