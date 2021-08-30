const ERR_500 = {
  code: 500,
  message: 'Internal Server Error'
}

let ID = 1

const PIZZAS = [
  {
    id: ID++,
    name: 'Чизбургер-пицца',
    price: 395,
  },
  {
    id: ID++,
    name: 'Сырная',
    price: 450,
  },
  {
    id: ID++,
    name: 'Креветки по-азиатски',
    price: 290,
  },
  {
    id: ID++,
    name: 'Сырный цыпленок',
    price: 385,
  },
  {
    id: ID++,
    name: 'Чизбургер-пицца',
    price: 395,
  },
  {
    id: ID++,
    name: 'Сырная',
    price: 450,
  },
  {
    id: ID++,
    name: 'Креветки по-азиатски',
    price: 290,
  },
  {
    id: ID++,
    name: 'Сырный цыпленок',
    price: 385,
  },
].map((p, idx) => ({...p, image: require(`../images/pizzas/${idx+1 > 9 ? idx+1 : '0'+(idx+1)}.png`).default}))

export const api = {
  getPizzas() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          resolve({
            pizzas: PIZZAS
          })
        }

        reject({
          error: ERR_500
        })
      }, Math.floor(Math.random() * 3) * 1000)
    })
  }
}