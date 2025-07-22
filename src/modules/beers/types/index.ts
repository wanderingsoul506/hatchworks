export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string | null;
  abv: number;
  ibu: number | null;
  food_pairing: string[];
  brewers_tips: string;
}

export interface GetBeersPayload {
  searchTerm?: string;
  page?: number;
  perPage?: number;
}
