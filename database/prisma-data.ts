import { PrismaClient } from "@prisma/client";
import {Customer} from "../model/customer";

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