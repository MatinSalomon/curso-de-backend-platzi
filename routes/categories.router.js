const express = require('express')
const router = express.Router()
const CategoryService = require('../servicies/categories.service.js')

const service = new CategoryService()

router.get('/', (req, res) => {
  const categories = service.find()
  res.json(categories)
});

router.get('/:id', (req, res) => {
  const {id} = req.params
  const category = service.findOne(id)
  res.json( category )
});

module.exports = router
