const bodyParser = require('body-parser');
let express = require('express');
let body = require('body-parser');
let app = express();
app.use(body);
app.get("/",(req,res)=>{
    return res.status(200).send("hello world");

});
// all product list.
let product = [
    {
        id:1,
        name:"flock"
    },
    {
        id:2,
        name:"redis"  
    },
    {
        id:3,
        name:"Zeta"  
    },
    {
        id:4,
        name:"ringo"  
    },
    {
        id:5,
        name:"slack"  
    },
    {
        id:6,
        "name":"cred"  
    },
    {
        id:7,
        name:"trllo"  
    }
];
// i want all product.
app.get("/product",(req,res)=>{
  return res.status(200).send({product});
});
// i want read product list by id.
app.get("/product/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id,"product id");
    let productId = product.filter((product)=>product["id"]==id
    );
    console.log(productId);
    return res.status(200).send(productId[0]['name']);

});

// i want delete  product by id.
app.delete("/product/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id,"product id");
    product.splice(id-1,1);
    return res.status(200).send(product);
});

// i want to create product .
app.post("/product",(req,res)=>{
    let productName=req.body.name;
    let id = product.length +1;
    product.push({
        id,
        name:productName
    });
    return res.status(200).send({message:"successfuly added ",id});
});

app.listen('3000',function(err,flag){
    if(err){
        console.log("server not conected");
        return;
    }
    console.log("server is coneceted.");
})