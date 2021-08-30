import { Link } from 'react-router-dom'
import './Btn.scss'

function Btn(props) {

  let {
    className: customClassName = '',
    theme = 'fill',
    to,
    ...rest
  } = props

  let className = "btn "
  className += `btn-${theme}-primary `
  className += customClassName

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {props.children}
      </Link>
    )
  }

  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  )
}

export { Btn }