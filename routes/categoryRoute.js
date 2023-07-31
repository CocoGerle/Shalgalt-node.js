const express = require("express");
const {Logger, shield} = require("../middleWares/logger")
const { upload } = require("../middleWares/upload");

const{getCategories,getCategory,createCategory,updateCategory,deleteCategory}=require("../controller/categoryController")
const router=express.Router();

router.route("/").get(getCategories).post(shield,Logger, upload.array("image", 10), createCategory)

router.route("/:id").get(getCategory).put(shield,Logger, updateCategory).delete(shield,Logger, deleteCategory)


module.exports=router;