import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Header/Header.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import { api } from "./services/api.js";
import { StyledCardsContainer } from "./App.js";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [loading, setloading] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setloading(true);
        const { data } = await api.get("products");
        setProdutos(data);
      } catch (error) {
        toast("erro")
      } finally {
        setloading(false);
      }
    }
    loadProducts();
  }, []);

  function addCart(currentProduct) {
    if (!cart.some((product) => product.id == currentProduct.id)) {
      setCart([...cart, currentProduct]);
    } else {
      toast("item já adicionado");
    }
  }

  function removeCart(id) {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    toast('Produto remivido')
  }

  function removeAll(id) {
    const remove = cart.filter((product) => product.id == id);
    setCart(remove);
    toast('Produtos remividos')
  }

  const searchProducts = produtos.filter((produto) => {
    return search === ""
      ? true
      : produto.name.toLowerCase().includes(search.toLowerCase()) ||
          produto.category.toLowerCase().includes(search.toLowerCase());
  });

  const totalMoney = cart.reduce(
    (accumulator, { price }) => accumulator + price,
    0
  );

  return (
    <section className="App">
      <Header setSearch={setSearch} />
      <StyledCardsContainer>
        <ProductsList
          searchProducts={searchProducts}
          loading={loading}
          produtos={produtos}
          addCart={addCart}
        />
        <Cart
          cart={cart}
          removeCart={removeCart}
          removeAll={removeAll}
          totalMoney={totalMoney}
        />
      </StyledCardsContainer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </section>
  );
}

export default App;
