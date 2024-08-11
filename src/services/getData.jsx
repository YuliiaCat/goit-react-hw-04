import axios from "axios"

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {'Accept-Version': 'v1'}
});

export const getData = async (query, page = 1) => {
  if (!query) {
    return;
  }

  const searchParams = new URLSearchParams({
    per_page: 18,
    client_id: 'QU9Ak7ojgfnI9aWxPeBxnpDQNTEEcqspPJmntT_vA4c',
    query,
    page,
    orientation: 'landscape',
  });

  return instance.get(`/search/photos?${searchParams.toString()}`);
}