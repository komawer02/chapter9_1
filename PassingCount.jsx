import React,{useState} from 'react';
import './PassingCount.css';

const FirstChild=(props)=>{ // 왼쪽 컴포넌트
    console.log(`자식1 ${props.data}`) //콘솔로 leftCount 데이터 확인
    return( //페이지 리턴
        <div className='first'> 
            <p>자식1 컴포넌트</p>
            <p> (카운터: {props.data})</p>{/*leftCount 데이터 출력*/}
        </div>
    )
}
const SecondChild=(props)=>{ //중앙 컴포넌트
    const onLeftClick=()=>props.setLeft((prevData)=>parseInt(prevData)+1) //leftCount 증가 함수
    const onRightClick=()=>props.setRight((prevData)=>parseInt(prevData)+1) //rightCount 증가 함수

    console.log('자식2 (버튼)') //중앙 컴포넌트 호출 확인
    return( //페이지 리턴
        <div className='second'>
            <p>자식2 컴포넌트</p>
            <button onClick={onLeftClick}>◀ 카운터++</button> {/* 클릭하면 onLeftClick 실행 */}
            <button onClick={props.resetData}>카운터 0</button> {/* 카운트 리셋 */}
            <button onClick={onRightClick}>카운터++ ▶</button> {/* 클릭하면 onRightClick 실행 */}
        </div>
    )
}

const ThirdChild = (props)=>{ //오른쪽 컴포넌트
    console.log(`자식3 ${props.data}`) //RightCount 데이터 확인
    return(
        <div className='third'>
            <p>자식3 컴포넌트</p>
            <p>(카운터: {props.data})</p> {/* RightCount 데이터 출력 */}
        </div>
    )
}

function PassingCount(){
    const [leftCount,setLeftCount] = useState(0) // 왼쪽 컴포넌트에 표시될 데이터
    const [rightCount,setRightCount] = useState(0) // 오른쪽 컴포넌트에 표시될 데이터
    const resetData = ()=>{setLeftCount(0);setRightCount(0)} // *Count State 값 0으로 초기화

    return(
        <div className='parent'>
            부모컴포넌트
            <br/>
            (왼쪽카운트:{leftCount}, 오른쪽:{rightCount})
            <div className='layout'>
                <FirstChild data={leftCount}/> {/* 왼쪽 컴포넌트 배치, props로 leftCount 전달 */}
                <SecondChild setLeft={setLeftCount} 
                setRight={setRightCount} 
                resetData={resetData}/>{/* 중앙 컴포넌트 배치, props로 setLeft, setRight, resetData 함수 전달 */}
                <ThirdChild data={rightCount}/> {/* 오른쪽 컴포넌트 배치, props로 rightCount 전달 */}
            </div>
        </div>
    )
}
export default PassingCount