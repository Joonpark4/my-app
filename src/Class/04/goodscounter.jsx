import {useSelector, useDispatch} from 'react-redux'
import { addNumber, substractNumber } from './redux'

function GoodsCounter(){
    // useSelector : store의 상태 조회 Hook
    const {stock, goods} = useSelector(state => ({
        stock : state.goodsReducer.stock,
        goods : state.goodsReducer.goods,
    }))
    console.log(stock, goods)
    // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook

    const dispatch = useDispatch()

    const onAddNumber = () => dispatch(addNumber())
    const onSubstractNumber = () => dispatch(substractNumber())

    return(
        <div>
            <h2>딥러닝 개발자 무릎담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type='button' onClick={onSubstractNumber}>MINUS</button>
                <span>{goods}</span>
                <button onClick={onAddNumber}>PLUS</button>
            </div>
            <div>
                총 수량 <strong>{goods}</strong>
            </div>
            <div><strong>{goods * 17500}</strong>원</div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </div>
    )
}

export default GoodsCounter;
// 리덕스 사용상 잇점
// 1. 예측 가능한 상태 관리 2. 디버깅 용이 3. 코드의 일관성 4. 컴포넌트간의 상태공유 5. 테스트 용이 6. 커뮤니티 지원