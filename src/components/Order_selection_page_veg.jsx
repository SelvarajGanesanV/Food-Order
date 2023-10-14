import '../App.scss';
import Selected_Order from '../redux/actions/OrderAction';
import { MdAddShoppingCart } from "react-icons/md";
import Menu_list from './Menu_list';
import { useSelector, useDispatch } from 'react-redux';
import { Details_Order } from '../redux/actions/OrderAction';
import { useHistory } from 'react-router';
import header from '../redux/Assests/header_Veg.jpg';
import { useState } from 'react';

const Order_selection_page_veg = () => {

    const Page_count =[1,2,3,4,5];

    const [Page_number,setPage_number]=useState(0);

    const Veg_Order = useSelector((state) => state.allProducts.Order.Veg[Page_number]);

    localStorage.setItem('Page_count',Page_number);

    const Order_List=useSelector((state)=>state.selected_order);

    const Recepies = [Veg_Order];

    const dispatch = useDispatch();

    const Collection =[];

    const Add_Cart = (items) => {

        dispatch(Selected_Order(items))

        const collections_list=JSON.stringify(Order_List)

        localStorage.setItem('collection_order_list',collections_list);

    }

    const Histroy = useHistory();

    const Details_order = (items) => {

        dispatch(Details_Order(items));

        Histroy.push(`Order_items_details`);

    }

    const Pagination=(Page_No)=>{

        setPage_number(Page_No);


    }

    // window.onload = myFunc => {

    // const current_page=localStorage.getItem('Page_count');

    // alert(current_page)
                
    //                 }
    

    return (

        < >
            <div className="container" >

                <div className="header">

                <h1>Treat YourSelf</h1>

                <img src={header}></img>

                    <div className="menu_list">

                        <Menu_list />

                    </div>

                </div>

                <div className="container_list_">

                    {Recepies[0].map((items) =>

                        <div className="card" key={items.name} >

                            <img src={items.image} alt="item1" className="item_refer_image" onClick={()=>Details_order(items)}></img>

                            <h3>{items.name}</h3>

                            <p>Cost..only.Rs<b>{items.rate}</b></p>

                            <button onClick={(e) => Add_Cart(items)}>Add_Cart <MdAddShoppingCart size={20}/></button>

                        </div>
                    )}
                    <div className="pagination">                   
                    
                     {Page_count.map((Page_No)=>
                    
                    <button onClick={(e)=>Pagination(Page_count.indexOf(Page_No))} key={Page_No} className="pagenation_btn">{Page_No}</button>

                    )}</div>


                 

                </div>

            </div>

        </>

    );

}
export default Order_selection_page_veg;