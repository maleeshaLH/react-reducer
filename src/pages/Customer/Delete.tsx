import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../../store/CustomerProvider.tsx";
import {Customer} from "../../models/Customer.ts";
import {Modal} from "../../components/Modal.tsx";
import {Item} from "../../models/Item.ts";
import {ItemContext} from "../../store/ItemProvider.tsx";

export function Delete() {

    const navigate = useNavigate();
    // @ts-ignore
    const [customers, dispatch] = useContext(CustomerContext);
    // @ts-ignore
    const [items, discptch_Items] = useContext(ItemContext);


    const [email,setEmail] = useState("");
    const [item_code, setItem_Code] = useState("");


    function handleSubmit() {
        // @ts-ignore
        const deleteCustomer = new Customer(email);
        dispatch({type:'DELETE_CUSTOMER',payload:deleteCustomer});
        navigate('/');
    }
    function handleItemSubmit() {
        // @ts-ignore
        const deleteItem = new Item(item_code);
        discptch_Items({type:'DELETE_ITEM',payload:deleteItem});
        navigate('/');
    }

    return (
        <>
            <h1 className="text-4xl font-bold text-center my-8">Delete Customer & Item</h1>
            <div className="flex flex-wrap justify-center gap-8 p-4">

                {/*Delete Customer Section*/}
                <div className="flex-1 min-w-[300px] max-w-[500px] bg-white p-6 rounded-lg shadow-md">
                    <header className="mb-6">
                        <h2 className="text-3xl font-semibold text-center">Delete Item</h2>
                    </header>
                    <Modal type='customer'
                        handleSubmit={handleSubmit}
                           setEmail={setEmail}>Delete
                        Customer</Modal>

                </div>

                {/* Add Item Section */}
                <div className="flex-1 min-w-[300px] max-w-[500px] bg-white p-6 rounded-lg shadow-md">
                    <header className="mb-6">
                        <h2 className="text-3xl font-semibold text-center">Delete Item</h2>
                    </header>

                    <Modal
                        handleItemSubmit={handleItemSubmit}
                        setItem_Code={setItem_Code}>
                        Delete Item
                    </Modal>
                </div>

            </div>
        </>
    );
}