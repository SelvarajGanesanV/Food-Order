import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import Selected_Order from '../redux/actions/OrderAction';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiMeat } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

const Menu_list = () => {

    const dispatch = useDispatch();

    let Order_list=useSelector((state)=>state.selected_order);

    const Collection_list=[JSON.parse(localStorage.getItem('collection_order_list'))];

     window.onload = myFunction => {
         

for(let i=0;i<=Collection_list[0].length;i++)
{
    if(Collection_list[0][i] !== undefined)
    {
        dispatch(Selected_Order(Collection_list[0][i]))
    }
 
}
console.log(Order_list);


    }

    return (
        <>

            <Link to="/"><button className="veg_button">Vegetarian foods <FaLeaf size={20}/></button></Link>

            <Link to="/Order_selection_page_Nonveg"><button className="nonveg_button">Non-Vegetarian foods <GiMeat size={20}/></button></Link>

            <Link to="/Order_selection_page_Chinse"><button className="chinse_button">Chinese foods <IoFastFoodSharp size={20}/></button></Link>

            <Link to="/Cart_review_page"><button className="cart_button">Cart <AiOutlineShoppingCart size={20}/>{Order_list!=0?<p>{JSON.parse(localStorage.getItem('collection_order_list')).length}</p>:console.warn('didnot add any dish in order')}</button></Link>

        </>
    );
}
export default Menu_list;