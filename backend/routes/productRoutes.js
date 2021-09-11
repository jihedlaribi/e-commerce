const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");
//get all products 
router.get("/", getProducts);
//get products by id 
router.get("/:id", getProductById);

module.exports = router;