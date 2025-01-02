import {useNavigate} from "react-router";
import {useContext, useState} from "react";
// import {CustomerContext} from "../store/CustomerProvider.tsx";
// import {Customer} from "../models/Customer.ts";
import {Modal} from "../../components/Modal.tsx";
import {CustomerContext} from "../../store/CustomerProvider.tsx";
import {Customer} from "../../models/Customer.ts";
import {Item} from "../../models/Item.ts";
import {ItemContext} from "../../store/ItemProvider.tsx";

export function Add() {

    const navigate = useNavigate();
    // @ts-ignore
    const [customers, customer_dispatch] = useContext(CustomerContext);
    // @ts-ignore
    const [items,item_dispatch] = useContext(ItemContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [item_code, setItem_Code] = useState("");
    const [description, setDescription] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        customer_dispatch({type:'ADD_CUSTOMER', payload:newCustomer});
        navigate('/');
    }

    function handleItemSubmit() {
        const newItem = new Item(item_code,description,qty,price);
        item_dispatch({type:'ADD_ITEM', payload:newItem});
        navigate('/');
    }

    return (
        <>
            {/*<div className="flex flex-col items-center justify-center">*/}
            {/*    <header className="mt-8 mb-6">*/}
            {/*        <h1 className="text-5xl font-bold text-black-800">Add Customer</h1>*/}
            {/*    </header>*/}

            {/*    <Modal type='customer'*/}
            {/*        handleSubmit={handleSubmit}*/}
            {/*           setName={setName}*/}
            {/*           setEmail={setEmail}*/}
            {/*           setPhone={setPhone}>*/}
            {/*        Add Customer*/}
            {/*    </Modal>*/}
            {/*</div>*/}


            {/*<div className="flex flex-col items-center justify-center">*/}
            {/*    <header className="mt-8 mb-6">*/}
            {/*        <h1 className="text-5xl font-bold text-black-800">Add Item</h1>*/}
            {/*    </header>*/}

            {/*    <Modal type='item'*/}
            {/*        handleItemSubmit={handleItemSubmit}*/}
            {/*           setItem_code={setItem_code}*/}
            {/*           setDescription={setDescription}*/}
            {/*           setQty={setQty}*/}
            {/*           setPrice={setPrice}*/}
            {/*    >*/}
            {/*        Add Item*/}
            {/*    </Modal>*/}
            {/*</div>*/}

            <h1 className="text-4xl font-bold text-center my-8">Add Customer & Item</h1>

            <div className="flex flex-wrap justify-center gap-8 p-4">

                {/* Add Customer Section */}
                <div className="flex-1 min-w-[300px] max-w-[500px] bg-white p-6 rounded-lg shadow-md">
                    <header className="mb-6">
                        <h2 className="text-3xl font-semibold text-center">Add Customer</h2>
                    </header>

                    <Modal type='customer'
                           handleSubmit={handleSubmit}
                           setName={setName}
                           setEmail={setEmail}
                           setPhone={setPhone}>
                        Add Customer
                    </Modal>
                </div>

                {/* Add Item Section */}
                <div className="flex-1 min-w-[300px] max-w-[500px] bg-white p-6 rounded-lg shadow-md">
                    <header className="mb-6">
                        <h2 className="text-3xl font-semibold text-center">Add Item</h2>
                    </header>

                    <Modal type='item'
                           handleItemSubmit={handleItemSubmit}
                           setItem_Code={setItem_Code}
                           setDescription={setDescription}
                           setQty={setQty}
                           setPrice={setPrice}>
                        Add Item
                    </Modal>
                </div>

            </div>

        </>
    );

}