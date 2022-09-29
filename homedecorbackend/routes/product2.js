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
} = require("../controllers/product2");


//all of params

router.param("productId", getProductById);

//all of actual routes
//create route
router.post( "/product2/create", upload.single('productImage'), createProduct );

router.get( "/product2", getAllproduct );

// // read routes
router.get("/product2/:productId", getProduct);


// //delete route
router.delete( "/product2/:productId", deleteProduct );

router.put( "/product2/:productId", updateProduct );

module.exports = router;