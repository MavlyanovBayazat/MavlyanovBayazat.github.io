import { useSelector } from 'react-redux'
import CartImg from '../../images/icons/cart.svg'
import { Btn } from '../btn/Btn'
import './CartBtn.scss'

function CartBtn() {
  const cart = useSelector((state) => state.cart.cart)

  // Вычисления
  let cartPrice = 0
  let cartLength = 0
  // 1. Пройти циклом и сумировать
  Object.values(cart).forEach(function (cartItem) {
    cartPrice += cartItem.count * cartItem.pizza.price
    cartLength += cartItem.count
  })

  return (
    <Btn className="CartBtn" to="/cart" style={{ textDecoration: 'none' }}>
      <span className="CartBtn__price">{cartPrice} ₽</span>
      <img className="CartBtn__icon" src={CartImg} />
      <span className="CartBtn__count">{cartLength}</span>
    </Btn>
  )
}

export { CartBtn }