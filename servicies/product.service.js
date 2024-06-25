const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

class ProductosServecie {

  constructor(){
    this.productos = []
    this.generate()
  }

  generate(){
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.productos.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.productos.push(newProduct)
    return  newProduct;
  }

  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.productos)
      }, 2000)
    })
  }

  async findOne(id){
    const product = this.productos.find(item => item.id === id)
    if(!product){
      throw boom.notFound('Producto no encontrado')
    }
    if(product.isBlock){
      throw boom.conflict('Producto bloqueado')
    }
    return product
  }

  async update(id, changes){
    const index = this.productos.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Producto no encontrado')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.productos[product]
  }

  async delete(id){
    const product = this.productos.findIndex(item => item.id === id)
    if(product == -1){
      throw boom.notFound('Producto no encontrado')
    }
    this.productos.splice(product, 1)
    return
  }
}

module.exports =  ProductosServecie
