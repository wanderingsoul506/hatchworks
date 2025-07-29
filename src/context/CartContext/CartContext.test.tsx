import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import type { Product } from "../../modules/products";
import { useCart } from "./useCart";
import { CartProvider } from "./CartProvider";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 19.99,
  description: "A mock product for testing",
  category: "test",
  image: "test.jpg",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

function CartTestComponent() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <button onClick={() => addToCart(mockProduct)}>Add</button>
      <button onClick={() => removeFromCart(mockProduct.id)}>Remove</button>
      <div data-testid="cart-length">{cart.length}</div>
      <div data-testid="cart-quantity">
        {cart.find((item) => item.id === mockProduct.id)?.quantity || 0}
      </div>
    </div>
  );
}

function renderWithCart() {
  return render(
    <CartProvider>
      <CartTestComponent />
    </CartProvider>
  );
}

describe("CartContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("adds an item to the cart", () => {
    renderWithCart();

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByTestId("cart-length").textContent).toBe("1");
    expect(screen.getByTestId("cart-quantity").textContent).toBe("1");
  });

  it("increments quantity if adding same item again", () => {
    renderWithCart();

    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByTestId("cart-quantity").textContent).toBe("2");
  });

  it("removes an item from the cart", () => {
    renderWithCart();

    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Remove"));

    expect(screen.getByTestId("cart-quantity").textContent).toBe("0");
    expect(screen.getByTestId("cart-length").textContent).toBe("0");
  });

  it("decrements quantity without removing if > 1", () => {
    renderWithCart();

    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Remove"));

    expect(screen.getByTestId("cart-quantity").textContent).toBe("1");
    expect(screen.getByTestId("cart-length").textContent).toBe("1");
  });
});
