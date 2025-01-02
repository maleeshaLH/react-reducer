import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../../store/CustomerProvider.tsx";
import {Modal} from "../../components/Modal.tsx";
import {Customer} from "../../models/Customer.ts";
import {ItemContext} from "../../store/ItemProvider.tsx";
import {Item} from "../../models/Item.ts";

export function Update() {

    const navigate = useNavigate();
    // @ts-ignore
    const [customers, dispatch_Customer] = useContext(CustomerContext);
    // @ts-ignore
    const [items, dispatch_Items] = useContext(ItemContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [item_code, setItem_Code] = useState("");
    const [description, setDescription] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch_Customer({type:'UPDATE_CUSTOMER', payload:updatedCustomer});
        navigate('/');
    }

    function handleItemSubmit() {
        const updatedItem = new Item(item_code, description, qty, price);
        dispatch_Items({type:'UPDATE_ITEM', payload:updatedItem});
        navigate('/');
    }

    return (
        <>
            <h1 className="text-4xl font-bold text-center my-8">Update Customer & Item</h1>
            <div className="flex flex-wrap justify-center gap-8 p-4">

                <div className="flex-1 min-w-[300px] max-w-[500px] bg-white p-6 rounded-lg shadow-md">
                    <header className="mb-6">
                        <h2 className="text-3xl font-semibold text-center">Update Customer</h2>
                    </header>
                    <Modal type='customer'
                        handleSubmit={handleSubmit}
                           setName={setName}
                           setEmail={setEmail}
                           setPhone={setPhone}>
                        Update Customer
                    </Modal>

                </div>
                {/* Add Item Section */}
                <div className="flex-1 min-w-[300px] max-w-[500px] bg-white p-6 rounded-lg shadow-md">
                    <header className="mb-6">
                        <h2 className="text-3xl font-semibold text-center">Update Item</h2>
                    </header>

                    <Modal
                        handleItemSubmit={handleItemSubmit}
                        setItem_code={setItem_Code}
                        setDescription={setDescription}
                        setQty={setQty}
                        setPrice={setPrice}>
                        Update Item
                    </Modal>
                </div>
            </div>
            </>
            );
            }