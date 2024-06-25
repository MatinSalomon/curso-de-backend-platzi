const { faker } = require('@faker-js/faker')

class CategoryService {

  constructor(){
    this.categories = []
    this.generate()
  }

  generate(){
    const limit = 100
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department()
      })
    }
  }

  create(){
    return "Producto creado"
  }
  find(){
    return this.categories
  }
  findOne(id){
    return this.categories.find(item => item.id === id)
  }

  update(){
    return "Producto actualizado"
  }
  delete(){
    return "Producto eliminado"
  }
}

module.exports =  CategoryService
