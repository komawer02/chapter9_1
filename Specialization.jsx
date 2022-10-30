const Universal = ({bgColor, title, color,text, btn:btn=null, alertcontent})=>{
    // 범용 컴포넌트
    // props로 bgColor(없으면 lightgray), title(없으면 범용 다이얼로그), text, btn(없으면 null), alertcontent를 받음
    return(
        <div style={{height:100,border:'1px solid black',margin:10,bgColor:'white',textAlign:'center'}}>
            <div style={{backgroundColor:bgColor,color/* div의 배경색을 props로 변경 */}}>
                {title}
            </div>
            <div>
                <p>{text}</p>
                {
                    btn!==null&&<button onClick={()=>{alert(JSON.stringify(alertcontent))}}>{btn}</button>
                    //props로 전달받은 btn이 null이면 버튼 표시 안함
                    //버튼 클릭시 alertcontent의 object 데이터를 스트링으로 변환 후 alert에 표시
                }
            </div>
        </div>
    )
}

const Specialization = ()=>{
    return(
        <div style={{display:'flex',flexDirection:'column',rowGap:10}}>
            <Universal bgColor="yellow" title="경고 다이얼로그" text="버튼을 눌러 경고를 확인하세요" btn="경고" alertcontent="경고 발생"/>
            <Universal bgColor="red" title="오류 다이얼로그" text="버튼을 눌러 오류를 확인하세요" btn="오류"/>
            <Universal bgColor="orange" title="인사 다이얼로그" text="Hello!!" color="white"/>
            <Universal bgColor="black" title="공지사항 다이얼로그" text="공지사항" color="white"/>
        </div>
    )
}

export default Specialization