
const router=require('express').Router();
const ProductController=require('../controllers/product');


router.get("/",ProductController.GetAllProducts);


router.get("/:id",ProductController.GetProductById);


router.put("/:id",(req,res)=>{
    return res.status(200).json({Msg:"Update Product By Id"  + req.params.id});
});

router.post("/",ProductController.AddProduct);


router.delete("/:id",(req,res)=>{
    return res.status(200).json({Msg:"Delete Product By Id"  + req.params.id});
});


module.exports=router;