import {combineReducers} from 'redux'
import goodsReducer from './redux'
import stockReducer from './stockcounter'

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
})
// 두 개의 리듀서를 결합하여 하나의 루트 리듀서를 만드는 과정을 보여준다
export default rootReducer;