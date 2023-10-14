import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import Order_selection_page_veg from "./components/Order_selection_page_veg";
import Order_selection_page_Nonveg from "./components/Order_selection_page_Nonveg";
import Order_selection_page_Chinse from "./components/Order_selection_page_Chinse";
import Cart_review_page from './components/Cart_review_page';
import Order_items_details from './components/Order_items_details';
import './App.scss';
const App = () =>
{
return(
    <>

    <BrowserRouter>

        <Switch>
            
            <Route exact path="/"><Order_selection_page_veg/></Route>

            <Route exact path="/Order_selection_page_Nonveg"><Order_selection_page_Nonveg/></Route>

            <Route exact path="/Order_selection_page_Chinse"><Order_selection_page_Chinse/></Route>

            <Route exact path="/Cart_review_page"><Cart_review_page/></Route>

            <Route exact path="/Order_items_details"><Order_items_details/></Route>

        </Switch>

    </BrowserRouter>

</>
);
}
export default App;