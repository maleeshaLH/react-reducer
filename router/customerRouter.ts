import {
    createCustomer,
    getCustomer
} from "../database/localDateStore";
 import  express from 'express'
import {addCustomer} from "../database/prisma-data";
const router = express.Router();

 router.post('/post',async (req, res) => {
     res.send( await addCustomer(req.body))
 })

router.get('/get',(req, res) => {
    res.send(getCustomer())
})

export default router;