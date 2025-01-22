import { PrismaClient } from "@prisma/client";
import {Customer} from "../model/customer";
import router from "../router/customerRouter";

const prisma = new PrismaClient()

export async function addCustomer(customer :Customer){
   try {
       await prisma.customer.create({
           data:{
               id:customer.id,
               name:customer.name,
               age:customer.age,
               address: customer.address
           }
       })
       console.log("Customer add successfully")
       return 'Customer save Successfully '
   }catch (error){
       console.log(error)
   }

}

export async function getAllCustomer(){
    try {
        return await prisma.customer.findMany()

    }catch (error){
        return error;
    }
}

export async function deleteCustomer(id:number){
    try {
        await prisma.customer.delete({
            where:{id: id}
        })
        return 'Customer Delete Successfully'
    }catch (error){
        return error
    }
}
export async function updateCustomer(id: number, customer: Customer){
    try{
        await prisma.customer.update({
            where:{ id : id},
            data:{
                name: customer.name,
                age: customer.age,
                address: customer.address
            }
        })
        return 'Update success'
    }catch(err){
        console.log("error updating customer", err);
        return  err
    }
}
