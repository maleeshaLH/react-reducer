import {Customer} from "../model/customer";

let customers : Customer [] =[];

export const createCustomer = (customer :Customer) =>{
    customers.push(customer)
    console.log(customer)
    return 'Customer is saved'
}

export const getCustomer =() =>{
    return customers ;
    console.log(customers)
}