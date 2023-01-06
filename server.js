const express=require('express');
const cors=require('cors');
const app=express();
var corOptions={
    orgin:'https://localhost:8081'
}

//middlewares
app.use(cors(corOptions));
app.use(express.json)
app.use(express.urlencoded({extended:true}))

//testing
const PORT=process.env.PORT||8080;
app.get('/',(req,res)=>{
    res.json({message:"hiiiii dibi"})

})

app.listen(PORT,()=>{

    console.log(`connected on ${PORT}`);
})