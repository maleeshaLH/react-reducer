import {useContext} from "react";
import {Customer} from "../../models/Customer.ts";
import {CustomerContext} from "../../store/CustomerProvider.tsx";
import {ItemContext} from "../../store/ItemProvider.tsx";
import {Item} from "../../models/Item.ts";

export function Dashboard() {

    // @ts-ignore
    const [customers, discptch_customer] = useContext(CustomerContext);
    // @ts-ignore
    const [items, discptch_item] = useContext(ItemContext);
    return (
        <>
            {/*    Dashboard*/}

            {/*    /!*{/------*customer*!/*!/*/}
            {/*    <div className="overflow-x-auto p-4">*/}
            {/*        <table className="table-fixed w-full border-collapse border border-gray-300">*/}
            {/*            <thead className="bg-teal-500 text-white">*/}
            {/*            <tr>*/}
            {/*                <th className='custom-table-header'>Name</th>*/}
            {/*                <th className="custom-table-header">Email</th>*/}
            {/*                <th className="custom-table-header">Phone</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            {customers.length > 0 ? (*/}
            {/*                customers.map((customer: Customer) => (*/}
            {/*                    <tr key={customer.email} className="hover:bg-gray-100">*/}
            {/*                        <td className="custome-table text-center">{customer.name}</td>*/}
            {/*                        <td className="custome-table text-center">{customer.email}</td>*/}
            {/*                        <td className="custome-table text-center">{customer.phone}</td>*/}
            {/*                    </tr>*/}
            {/*                ))*/}
            {/*            ) : (*/}
            {/*                <tr>*/}
            {/*                    <td colSpan={3} className="text-center border border-gray-300 px-4 py-2">*/}
            {/*                        No Customers Available*/}
            {/*                    </td>*/}
            {/*                </tr>*/}
            {/*            )}*/}
            {/*            </tbody>*/}
            {/*        </table>*/}
            {/*    </div>*/}

            {/*    /!*------Item-------*!/*/}
            {/*    <div className="overflow-x-auto p-4">*/}
            {/*        <table className="table-fixed w-full border-collapse border border-gray-300">*/}
            {/*            <thead className="bg-teal-500 text-white">*/}
            {/*            <tr>*/}
            {/*                <th className='custom-table-header'>Item Code</th>*/}
            {/*                <th className="custom-table-header">Description</th>*/}
            {/*                <th className="custom-table-header">Qty</th>*/}
            {/*                <th className="custom-table-header">Price</th>*/}

            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            {items.length > 0 ? (*/}
            {/*                items.map((item: Item) => (*/}
            {/*                    <tr key={item.item_code} className="hover:bg-gray-100">*/}
            {/*                        <td className="custome-table text-center">{item.item_code}</td>*/}
            {/*                        <td className="custome-table text-center">{item.description}</td>*/}
            {/*                        <td className="custome-table text-center">{item.qty}</td>*/}
            {/*                        <td className="custome-table text-center">{item.price}</td>*/}
            {/*                    </tr>*/}
            {/*                ))*/}
            {/*            ) : (*/}
            {/*                <tr>*/}
            {/*                <td colSpan={3} className="text-center border border-gray-300 px-4 py-2">*/}
            {/*                        No Item Available*/}
            {/*                    </td>*/}
            {/*                </tr>*/}
            {/*            )}*/}
            {/*            </tbody>*/}
            {/*        </table>*/}
            {/*    </div>*/}

            {/*</>*/}
            <h1 className="text-4xl font-bold text-center my-8">Dashboard</h1>

            <div className="flex flex-wrap p-4 gap-4">

                {/* Customer Table */}
                <div className="flex-1 min-w-[300px]">
                    <h2 className="text-2xl font-semibold mb-4">Customers</h2>
                    <div className="overflow-x-auto border rounded-lg shadow-md">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead className="bg-teal-500 text-white">
                            <tr>
                                <th className="custom-table-header">Name</th>
                                <th className="custom-table-header">Email</th>
                                <th className="custom-table-header">Phone</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.length > 0 ? (
                                customers.map((customer: Customer) => (
                                    <tr key={customer.email} className="hover:bg-gray-100">
                                        <td className="custome-table text-center">{customer.name}</td>
                                        <td className="custome-table text-center">{customer.email}</td>
                                        <td className="custome-table text-center">{customer.phone}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center border border-gray-300 px-4 py-2">
                                        No Customers Available
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Item Table */}
                <div className="flex-1 min-w-[300px]">
                    <h2 className="text-2xl font-semibold mb-4">Items</h2>
                    <div className="overflow-x-auto border rounded-lg shadow-md">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead className="bg-teal-500 text-white">
                            <tr>
                                <th className="custom-table-header">Item Code</th>
                                <th className="custom-table-header">Description</th>
                                <th className="custom-table-header">Qty</th>
                                <th className="custom-table-header">Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.length > 0 ? (
                                items.map((item: Item) => (
                                    <tr key={item.item_code} className="hover:bg-gray-100">
                                        <td className="custome-table text-center">{item.item_code}</td>
                                        <td className="custome-table text-center">{item.description}</td>
                                        <td className="custome-table text-center">{item.qty}</td>
                                        <td className="custome-table text-center">{item.price}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center border border-gray-300 px-4 py-2">
                                        No Items Available
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
}