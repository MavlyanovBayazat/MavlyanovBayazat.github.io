import { Btn } from "../btn/Btn"
import './CartItem.scss'

import minusIcon from '../../images/icons/minus.svg'
import plusIcon from '../../images/icons/plus.svg'
import delIcon from '../../images/icons/del.svg'
import { useDispatch } from "react-redux"
import { addToCart, deleteFromCart } from "../../store/cart"

function CartItem({item}) {
  const {count, pizza: {image, name, price}} = item
  
  const dispatch = useDispatch()

  return (
    <div className="CartItem">
      <div className="CartItem__preview">
        <img src={image} className="CartItem__image" />
        <div className="CartItem__info">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="CartItem__controls">
        <Btn theme="outline" onClick={() => dispatch(deleteFromCart({pizza: item.pizza}))}>
          <img src={minusIcon} />
        </Btn>
        <span>{count}</span>
        <Btn theme="outline" onClick={() => dispatch(addToCart({ pizza: item.pizza }))}>
          <img src={plusIcon} />
        </Btn>
      </div>
      <div className="CartItem__sum">{count * price}</div>
      <Btn theme="outline" className="CartItem__delete"
           onClick={() => dispatch(deleteFromCart({ pizza: item.pizza, deleteAll: true}))}>
        <img src={delIcon} />
      </Btn>
    </div>
  )
}

export {CartItem}