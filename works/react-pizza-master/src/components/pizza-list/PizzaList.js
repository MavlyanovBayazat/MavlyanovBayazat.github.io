import { useEffect, useState } from "react"
import { api } from "../../api"
import { PizzaItem } from "../pizza-item/PizzaItem"
import './PizzaList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setPizzasList, setError } from '../../store/pizza'

function PizzaList() {
  const dispatch = useDispatch()
  const pizzas = useSelector((state) => state.pizzas)

  useEffect(() => {
    loadPizzas()
  }, [])

  const loadPizzas = () => {
    if (pizzas.list.length) return

    dispatch(setLoading(true))

    api.getPizzas()
      .then(res => dispatch(setPizzasList(res.pizzas)))
      .catch(err => dispatch(setError(err.error)))
      .finally(() => dispatch(setLoading(false)))
  }

  console.log(pizzas);

  if (pizzas.loading) return <div>Загрузка...</div>

  if (pizzas.error) return <div>Ошибка: {pizzas.error.code} - {pizzas.error.message}</div>

  return (
    <div className="PizzaList">
      <div className="container">
        <h1 className="PizzaList__title">Все пиццы</h1>

        <div className="PizzaList__wrap">
          {pizzas.list.map((pizzaData, idx) => (
            <PizzaItem pizza={pizzaData} key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export {PizzaList}