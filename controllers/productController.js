const db=require('../models')
//create main model
const Product=db.products
const Review=db.Review

//add profuct

const addProduct=async(req,res)=>{

    let info={
        title:req.body.title,
        price:req.body.price,
        describtion:req.body.describtion,
        published:req.body.published?req.body.published:false
    }

    const product=await Product.create(info)
    res.status(200).send(product)

}
const getProducts=(req,res)=>{

    let products=Product.findAll({})

}