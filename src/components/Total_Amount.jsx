import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Modal from 'react-modal';
import { useState } from 'react';
import { GiInfo } from "react-icons/gi";

const Total_Amount = () => {

    const Order_list = useSelector((state) => state.selected_order);

    const Order_review_list = [JSON.parse(localStorage.getItem("collection_order_list"))];

    const [Modal_open, setModal_open]=useState(false);

    const Total_Amount_order = JSON.stringify(Order_list.reduce((a, b) => a + b.rate, 0));

    const Histroy = useHistory();

    const Delivary_registered = () => {

        setModal_open(true);


    }

    const Close_Modal=()=>
    {
        setModal_open(false)

        Histroy.push(`/`);

        location.reload();

        localStorage.removeItem('collection_order_list');

    }

    const Content_style = {

        position: 'absolute',

        top: '30%',

        width: '400px',

        height: '200px',

        left: '32%',

        border: '1px solid #ccc',

        background: '#ffc290',

        borderRadius: '4px',

        outline: 'none',

        padding: '20px',

        borderRadius: '10px',


    }


    return (

        <div className="total_amount_Order">

            <table>

                <thead>

                    <tr>

                        <th>Dish_Name</th>

                        <th>Dish_cost</th>

                    </tr>

                </thead>

                <tbody>

                    {Order_list.map((items) =>

                        <tr key={items.describe}>

                            <td>{items.name}</td>

                            <td><b>Rs.</b>{items.rate}</td>

                        </tr>

                    )}

                    <tr><td><b>Todal_Cost</b></td><td><b>Rs.</b>{Total_Amount_order}</td></tr>

                </tbody>

            </table>

            <Modal isOpen={Modal_open}

                ariaHideApp={false}

                style={{ content: Content_style }} >

                <div><GiInfo style={{ color: 'green', fontSize: '3pc' }} />&nbsp;<h3>Order Confirmation </h3><hr /><p><b>Greetings..!.,</b><br />Your Order Rs.<b>{Total_Amount_order}</b> willbe Registered Delivaried Correct clcok for You ...</p></div>

                <button onClick={() =>Close_Modal() }className="Close_btn">close</button>

            </Modal>

            <button onClick={() => Delivary_registered()}>DELIVARY</button>

        </div>

    );

}
export default Total_Amount;