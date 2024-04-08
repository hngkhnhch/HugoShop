const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id',authMiddleWare, ProductController.updateProduct)
router.delete('/delete-product/:id', ProductController.deleteProduct)
router.get('/get-detailsproduct/:id', ProductController.getDetailsProduct)
router.get('/get-allproduct', ProductController.getAllProduct)

module.exports = router