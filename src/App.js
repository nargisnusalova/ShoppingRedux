import { useSelector } from "react-redux/es/exports";

import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

const App = () => {
 const showCart = useSelector(state => state.ui.cartIsVisible)

  return (
    <div>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </div>
  );
};

export default App;
