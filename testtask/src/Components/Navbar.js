import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Products from "./Products";
import Cart from "./Cart";
import Myprofile from "./Myprofile";
import { EachProduct } from "./EachProduct";
function Navbar() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myprofile">
                myprofile
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route path="/product/:pid" component={EachProduct} />
          <Route path="/cart" component={Cart}></Route>
          <Route path="/myprofile" component={Myprofile}></Route>
          <Route path="/products" component={Products}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
