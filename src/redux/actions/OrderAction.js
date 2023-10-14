
import { ActionTypes } from "../constants/action-type";

export const Set_Order=(Order)=>
{
    return{
        type:ActionTypes.SET_ORDER,
        payload : Order,
    };
};
export const Selected_Order=(Order)=>
{
    return{
        type:ActionTypes.SELECTED_ORDER,
        payload : Order,
    };
};
export default Selected_Order;
export const Details_Order=(Order)=>
{
    return{
        type:ActionTypes.DETAILS_ORDER,
        payload : Order,
    };
};
