import express from 'express'
import products from './data/Product.js';

const port=5000;
const app=express();

app.get('/',(req,res)=>{
    res.send('API Is Running.......')
})
app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    const product=products.find((p)=>p._id===req.params.id)
    res.json(product)

})

app.listen(port,() =>console.log(`It is running on ${port}`))