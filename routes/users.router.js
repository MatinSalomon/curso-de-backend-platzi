const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const {limit, offset} = req.query;
  res.json(
    {limit, offset}
  )
})

module.exports = router
