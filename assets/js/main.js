import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";

/*UI elements*/
/*ocultar loader*/
loader();

/* mostrar menu*/
showMenu();

/*mostrar carrito*/
showCart();

/*End UI elements */
/*products */
const { db, printProducts } = products(await getProducts());

/*carrito */

cart(db, printProducts);
