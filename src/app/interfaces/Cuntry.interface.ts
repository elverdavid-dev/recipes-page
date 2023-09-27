interface Country {
  _id: string;
  name: string;
  image: string;
}

export interface CountryData {
  page: number;
  totalPages: number;
  totalItems: number;
  data: Country[];
}
