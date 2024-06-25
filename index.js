const express = require('express')
const routerApi = require('./routes/index.js')
const cors = require('cors');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler.js')

const app = express()
const port = 3000

app.use(express.json())

app.use(cors());
app.get('/', (req, res) => {
    res.send('hello word')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








