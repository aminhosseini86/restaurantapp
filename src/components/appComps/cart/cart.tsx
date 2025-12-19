import { CartList } from "./cartList";
import { CartNoFood } from "./cartNoFood";

const cartList = [
  { id: 1, name: "یه غذای به شدت لذیذ", quantity: 1, unitPrice: 375000 },
];

function Cart() {
  if (cartList.length === 0) {
    return <CartNoFood />;
  }

  if (cartList.length >= 0) return <CartList />;

  return <></>;
}

export default Cart;
