import { axiosPunk } from "../../../lib";
import type { Beer, GetBeersPayload } from "../types";

const getBeers = async ({
  page,
  perPage,
  searchTerm,
}: GetBeersPayload): Promise<Beer[]> => {
  return axiosPunk.get(`/beers`, {
    params: {
      beer_name: searchTerm,
      page,
      perPage,
    },
  });
};

export default getBeers;
