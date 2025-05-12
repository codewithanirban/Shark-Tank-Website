const API_URL = 'http://localhost:8000/api/offer';

export const getOffers = async () => {
  const response = await fetch(`${API_URL}/`);
  return response.json();
};

export const createOffer = async (offer) => {
  const response = await fetch(`${API_URL}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(offer)
  });
  if (!response.ok) throw new Error('Failed to create offer');
  return response.json();
};

export const updateOfferStatus = async (offerId, status) => {
  const response = await fetch(`http://localhost:8000/api/offers/edit`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ offer_id: offerId, status })
  });
  if (!response.ok) throw new Error('Failed to update offer status');
  return response.json();
};