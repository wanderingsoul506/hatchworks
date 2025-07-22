import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 25.99,
  description: "A sample description",
  category: "test",
  image: "https://example.com/image.jpg",
  rating: { rate: 4.5, count: 100 },
};

test("renders product card", () => {
  render(
    <MemoryRouter>
      <ProductCard product={mockProduct} />
    </MemoryRouter>
  );

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("$25.99")).toBeInTheDocument();
});
