import { combineReducers } from 'redux';
import { OrderReducer,Selcted_OrderReducer,Details_Order } from './OrderReducer';


const reducers = combineReducers({
    allProducts: OrderReducer,
    selected_order:Selcted_OrderReducer,
    detail:Details_Order
});

export default reducers;