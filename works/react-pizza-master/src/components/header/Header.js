import { CartBtn } from "../cart-btn/CartBtn"
import { Logo } from "../logo/Logo"

import "./Header.scss"

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <Logo />
        <CartBtn />
      </div>
    </header>
  )
}

export {Header}