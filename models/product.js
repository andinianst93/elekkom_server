const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  description: {
    type: String,
    required: [true, 'product description must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['apple', 'msi', 'dell', 'lenovo', 'asus', 'acer'],
      message: '{VALUE} is not supported',
    },
    // enum: ['Apple', 'MSI', 'Dell', 'Lenovo', 'Asus', 'Acer'],
  },
  image: {
    type: String,
    required: [true, 'image must be provided'],
  },
})

module.exports = mongoose.model('Product', productSchema)
