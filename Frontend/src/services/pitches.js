const API_URL = 'http://localhost:8000/api/pitch';

export const getPitches = async () => {
  const response = await fetch(`${API_URL}/`);
  return response.json();
};

export const createPitch = async (pitch) => {
  const response = await fetch(`${API_URL}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pitch)
  });
  return response.json();
};

export const updatePitchStatus = async (pitchId, status) => {
  const response = await fetch(`http://localhost:8000/api/pitch/edit`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pitch_id: pitchId, status })
  });
  if (!response.ok) throw new Error('Failed to update pitch status');
  return response.json();
};

export const getPitchWithOffers = async (pitchId) => {
  const response = await fetch(`http://localhost:8000/api/pitch/${pitchId}`);
  if (!response.ok) throw new Error('Failed to fetch pitch with offers');
  return response.json();
};