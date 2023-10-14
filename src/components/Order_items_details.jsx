import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IoArrowUndoSharp } from "react-icons/io5";

const Order_items_details = () => {

    const Histroy = useHistory();

    const Order_details = useSelector((state) => state.detail.payload);

    const Recepies = [Order_details];

    console.log(Order_details);

    const Back_to_previous = () => {

        Histroy.push(`Cart_review_page`);

    }

    return (
        
        <>
            <div className="container">

                <div className="container_list_display">

                    {Recepies.map((items) =>

                        <div className="card_describe" key={items.name}>

                            <img src={items.image} alt="item1" className="item_refer_image"></img>

                            <h4>{items.describe}</h4>

                            <button onClick={() => Back_to_previous()} className="back_cart" ><IoArrowUndoSharp className="icons_style"/> </button>

                        </div>

                    )}

                </div>

            </div>

        </>
    );
}
export default Order_items_details;