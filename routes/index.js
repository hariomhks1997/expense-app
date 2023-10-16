const path = require('path');

const express = require('express');

const controller=require("../controller/input")


const router = express.Router();

router.get("/",controller.getinput)
router.post("/add-product",controller.postinput)
router.get("/add-product",controller.getpostinput)
router.delete("/deleteuser/:productId",controller.postDeleteProduct)


module.exports=router;