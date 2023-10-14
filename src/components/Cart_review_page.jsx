import { useSelector, useDispatch } from 'react-redux';
import { IoArrowUndoSharp } from "react-icons/io5";
import { useHistory } from 'react-router';
import { Details_Order } from '../redux/actions/OrderAction';
import header from '../redux/Assests/cart.jpg'
import Total_Amount from './Total_Amount';


const Cart_review_page = () => {

    const Histroy = useHistory();

    const Order_list = useSelector((state) => state.selected_order);

    const dispatch = useDispatch();

    console.log(Order_list)

    const Details_order = (items) => {

        dispatch(Details_Order(items));

        Histroy.push(`Order_items_details`);

    }

    const Back_to_previous = () => {

        Histroy.push(`/`);

    }

    return (

        <>

{  Order_list != 0  ?  <div className="container">

                <div className="header">

                <h1>Treat YourSelf</h1>

                <img src={header}></img>

          </div>

                <div className="container_list_">

                    {Order_list.map((items) =>

                      <div className="card" key={items.name}>

                            <img src={items.image} alt="item1" className="item_refer_image"></img>

                            <h3>{items.name}</h3>

                            <p>Cost..only.Rs<b>{items.rate}</b></p>

                            <button onClick={(e) => Details_order(items)} >DETAILS</button>

                        </div>
 
                        
                    )}
   <Total_Amount/>
                </div>

              
                <button onClick={() => Back_to_previous()} className="back_btn_style" ><IoArrowUndoSharp className="icons_style"/></button>

            </div>:Histroy.push(`/`)}



        </>
    );

}
export default Cart_review_page;