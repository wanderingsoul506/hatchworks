import { useQuery } from "@tanstack/react-query";

import { getBeers } from "../api";
import type { GetBeersPayload } from "../types";

const useBeers = (payload: GetBeersPayload) =>
  useQuery({
    queryKey: ["beers", payload],
    queryFn: () => getBeers(payload),
  });

export default useBeers;
