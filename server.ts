import express from 'express';
import customerRouter from './router/customerRouter'
const app = express();
app.use(express.json());

app.listen(3001, ()=>{
    console.log("Server running on port 3001");
});

app.use('/customer',customerRouter)


// app.use('/',(req,res,next)=>{
//     res.status(200).send('Not Found');
// })