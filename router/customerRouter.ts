import {
    createCustomer,
    getCustomer
} from "../database/localDateStore";
 import  express from 'express'
import {addCustomer, deleteCustomer, getAllCustomer, updateCustomer} from "../database/prisma-data";
import {Customer} from "../model/customer";
const router = express.Router();

 router.post('/post',async (req, res) => {
     res.send( await addCustomer(req.body))
 })

router.get('/get',async (req, res) => {
    try {
        res.json(await getAllCustomer())
    }catch (error){
        console.log('error get all customer')
    }
})
router.delete("/delete/:id", async (req, res) => {
    const id: number  =+ req.params.id;
    try{
        await deleteCustomer(id);
        res.send('Customer Deleted');
    }catch(err){
        console.log("error deleting customer", err);
    }
})
router.put("/update/:id",async (req, res) => {
    const id:number = +req.params.id;
    const customer : Customer = req.body;

    try{
        await updateCustomer(id, customer);
        res.send('Customer Updated');
    }catch(err){
        console.log("error updating customer", err);
    }
})

export default router;