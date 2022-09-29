const express = require('express')

const router = express.Router();

const {createCategory,getAllCategory,getCategory,getCategoryById,removeCategory,updateCategory} = require("../controllers/category");

router.post("/category/create/",createCategory);
router.get("/categories", getAllCategory);

router.param("categoryId", getCategoryById);
router.get("/category/:categoryId", getCategory);

router.delete("/category/:categoryId",removeCategory);
router.put("/category/:categoryId", updateCategory);
    

module.exports = router;