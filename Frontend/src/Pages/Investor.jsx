import { useState, useEffect } from 'react';
import OfferCard from '../components/OfferCard';
import { getPitches } from '../services/pitches';
import { createOffer } from '../services/offers';

export default function Investor({ user }) {
  const [pitches, setPitches] = useState([]);
  const [selectedPitch, setSelectedPitch] = useState(null);
  const [offerData, setOfferData] = useState({
    fundingAmt: 0,
    equityReq: 0,
    additionalTerms: ''
  });

  useEffect(() => {
    const fetchPitches = async () => {
      const data = await getPitches();
      setPitches(data.filter(p => p.status === 'OPEN'));
    };
    fetchPitches();
  }, []);

  const handleOfferSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPitch) return;
    
    const newOffer = await createOffer({
      ...offerData,
      investor: user.name,
      status: 'PENDING',
      pitch: { pitch_id: selectedPitch.pitch_id }
    });
    
    alert(`Offer created successfully!`);
    setOfferData({
      fundingAmt: 0,
      equityReq: 0,
      additionalTerms: ''
    });
  };

  return (
    <div className="page">
      <h1>Available Pitches</h1>
      
      <div className="pitches-grid">
        {pitches.map(pitch => (
          <div 
            key={pitch.pitch_id} 
            className={`pitch-card ${selectedPitch?.pitch_id === pitch.pitch_id ? 'selected' : ''}`}
            onClick={() => setSelectedPitch(pitch)}
          >
            <h3>{pitch.title}</h3>
            <p>{pitch.description}</p>
            <p>Funding: ${pitch.funding}</p>
            <p>Equity: {pitch.equityOffered}%</p>
          </div>
        ))}
      </div>

      {selectedPitch && (
        <div className="offer-form">
          <h2>Make Offer for: {selectedPitch.title}</h2>
          <form onSubmit={handleOfferSubmit}>
            <div className="form-group">
              <label>Funding Amount ($):</label>
              <input
                type="number"
                value={offerData.fundingAmt}
                onChange={(e) => setOfferData({...offerData, fundingAmt: parseFloat(e.target.value)})}
                required
                min="0"
                step="1000"
              />
            </div>
            <div className="form-group">
              <label>Equity Requested (%):</label>
              <input
                type="number"
                value={offerData.equityReq}
                onChange={(e) => setOfferData({...offerData, equityReq: parseFloat(e.target.value)})}
                required
                min="0"
                max="100"
                step="1"
              />
            </div>
            <div className="form-group">
              <label>Additional Terms:</label>
              <textarea
                value={offerData.additionalTerms}
                onChange={(e) => setOfferData({...offerData, additionalTerms: e.target.value})}
              />
            </div>
            <button type="submit">Submit Offer</button>
          </form>
        </div>
      )}
    </div>
  );
}