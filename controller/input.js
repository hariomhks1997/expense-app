const path=require("path");
const rootDir = require('../util/path');
const Product=require("../models/product")
const fs=require("fs")

exports.getinput=(req,res,next)=>{
  Product.findAll()
    .then(products => {
      
      // console.log(products)
      fs.writeFileSync("usernametxt",`${JSON.stringify(products)}`)
      
    
    next()

   
    })
    .catch(err => res.status(404).json({err:err}));
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
    

}
exports.postinput=(req,res,next)=>{
console.log(req.body)
    const id=Math.random().toString();
    const username=req.body.sellingprice;
    const email=req.body.fooditems;
    const mobile=req.body.items;
    const edit=req.body.edit;
   
console.log(req.body)
   if(edit==""){



   Product.create({
    id1:id,
   sellingprice:username,
   fooditems:email,
   items:mobile,


  })
    .then(result => {
  // console.log(result);

    res.json(result)


    })
    .catch(err => {
      res.status(404).json({err:err})
    });
}else{
    Product.findByPk(edit)
    .then(product => {
      product.sellingprice = username;
     product.id1=id
      product.fooditems = email;
      product.items = mobile;
      return product.save();
    })
    .then(result => {


      res.json(result)
    })
    .catch(err =>
    res.status(404).json({err:err})
    );
}

}
exports.getpostinput=(req,res,next)=>{

    Product.findAll()
    .then(products => {
      
      // console.log(products)
      res.json(products)
      

      

   

    })
    .catch(err => console.log(err));

}

exports.postDeleteProduct =(req, res, next) => {
    const prodId = req.params.productId;
console.log(prodId)
    Product.findByPk(prodId).then(user => {
        return user.destroy();
   }).then(result => {
    res.sendStatus(200)
       //res.redirect("/")
   }).catch(err => 
    res.status(404).json({err:err})
    );
  };
 // exports.editproduct=
