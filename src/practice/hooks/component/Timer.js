import React , {useEffect} from "react";

const Timer = (props) =>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는 중...');
        },1000);

        // useEffect의 return은 해당 컴포넌트가 언마운트될때 실행된다. 
        return ()=>{
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.')
        }
    }, [])
    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요.</span>
        </div>
    )
}

export default Timer;