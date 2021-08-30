import {Switch, Route} from 'react-router-dom'
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { PizzaList } from "./components/pizza-list/PizzaList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cart">
          <Header />
          <Cart />
        </Route>
        <Route path="/">
          <Header />
          <PizzaList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
