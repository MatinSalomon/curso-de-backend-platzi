const express = require('express')
const ProductosServecie = require('../servicies/product.service.js')
const validatorHandler = require('../middlewares/validator.handler.js')
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema.js')

const router = express.Router()
const service = new ProductosServecie()

router.get('/', async (req, res, next) => {
  try{
    const products = await service.find()
    res.json(products)
  }catch(error){
    next(error)
  }
})


router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => { try {
    const {id} = req.params
    const product = await service.findOne(id)
    res.json(product)
  }catch(error){
    next(error)
  }
})


router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
  try{
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json({
      message: 'created',
      data: newProduct
    })
  }catch(error){
    next(error)
  }
})

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try{
    const {id} = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json( product)
  }catch(error){
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
    const {id} = req.params
    const product = await service.update(id)
    res.json({ id })
  }catch{
    next(error)
  }

})

module.exports = router
