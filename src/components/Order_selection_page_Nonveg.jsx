import '../App.scss'
import Menu_list from './Menu_list';
import header from '../redux/Assests/header_non.jpg';
import { useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';
import Selected_Order from '../redux/actions/OrderAction';

const Order_selection_page_Nonveg = () => {

    const Page_count =[1,2,3,4,5];

    const [Page_number,setPage_number]=useState(0);

    const NonVeg_Order=useSelector((state)=>state.allProducts.Order.Non_veg[Page_number]);

    const Recepies=[NonVeg_Order];

    const Order_List=useSelector((state)=>state.selected_order);

    const dispatch = useDispatch();

    const Collection =[];

    const Add_cart=(items)=>
    {

        dispatch(Selected_Order(items))

        const collections_list=JSON.stringify(Order_List)

        localStorage.setItem('collection_order_list',collections_list);
        
    }

    return (

        <>
            <div className="container">

                <div className="header">
                    
                <h1>Treat YourSelf</h1>

                <img src={header}></img>

                    <div className="menu_list">

                        <Menu_list />

                    </div>

                </div>

                <div className="container_list_">

                    {Recepies[0].map((items) =>

                        <div className="card"  key= {items.name}>

                            <img src={items.image} alt="item1" className="item_refer_image"></img>

                            <h3>{items.name}</h3>

                            <p>Cost..only.Rs<b>{items.rate}</b></p>

                            <button onClick={(e)=>Add_cart(items)}>Add_Cart  <MdAddShoppingCart size={20}/></button>

                        </div>
                    )}

                    <div className="pagination">

{Page_count.map((Page_No)=>
                    
                    <button onClick={(e)=>setPage_number(Page_count.indexOf(Page_No))} key={Page_No}className="pagenation_btn">{Page_No}</button>

                    )}

</div>

                </div>

            </div>

        </>

    );

}
export default Order_selection_page_Nonveg;