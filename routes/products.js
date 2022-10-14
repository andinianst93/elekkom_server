const express = require('express')

const router = express.Router()

const {
  getSingleProduct,
  getAllProducts,
  getAllProductsStatic,
} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/:id').get(getSingleProduct)
router.route('/static').get(getAllProductsStatic)

module.exports = router
