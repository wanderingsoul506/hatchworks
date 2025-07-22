import { describe, expect, it, vi } from "vitest";

import { axiosStore } from "../../../lib";
import getProduct from "./getProduct";

vi.mock("../../../lib", () => ({
  axiosStore: {
    get: vi.fn(),
  },
}));

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  description: "A product for testing",
  category: "test",
  image: "https://example.com/image.jpg",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

describe("getProduct", () => {
  it("should fetch a product by id", async () => {
    (axiosStore.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      data: mockProduct,
    });

    const result = await getProduct(1);

    expect(axiosStore.get).toHaveBeenCalledWith("/products/1");
    expect(result.data).toEqual(mockProduct);
  });
});
