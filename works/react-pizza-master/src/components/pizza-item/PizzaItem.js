import './PizzaItem.scss'
import { Btn } from '../btn/Btn'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart'

function PizzaItem(props) {
  const { pizza } = props

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const cartData = cart[pizza.id]

  return (
    <div className="PizzaItem">
      <img className="PizzaItem__img" src={pizza.image} />
      <h3 className="PizzaItem__name">{pizza.name}</h3>
      <div className="PizzaItem__controls">
        <strong className="PizzaItem__price">от {pizza.price} ₽</strong>
        <Btn theme="outline" onClick={() => dispatch(addToCart({ pizza }))}>
          <span>+ Добавить</span>
          {cartData && (
            <span className="PizzaItem__count">
              {cartData.count}
            </span>
          )}
        </Btn>
      </div>
    </div>
  )
}

export { PizzaItem }