const express = require("express");
const router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});

var upload = multer({ storage: storage })

const {
	getProductById,
	createProduct,
	getAllproduct,
	getProduct,
	updateProduct,
	deleteProduct
} = require("../controllers/product1");


//all of params

router.param("productId", getProductById);

//all of actual routes
//create route
router.post( "/product1/create", upload.single('productImage'), createProduct );

router.get( "/product1", getAllproduct );

// // read routes
router.get("/product1/:productId", getProduct);


// //delete route
router.delete( "/product1/:productId", deleteProduct );

router.put( "/product1/:productId", updateProduct );

module.exports = router;