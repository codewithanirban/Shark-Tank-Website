import { useState } from 'react';
import { updatePitchStatus } from '../services/pitches';
import OfferCard from './OfferCard';

export default function PitchCard({ pitch, isInvestorView = false, onStatusUpdate }) {
  const [currentStatus, setCurrentStatus] = useState(pitch.status);
  const [showOffers, setShowOffers] = useState(false);

  const handleStatusUpdate = async (newStatus) => {
    try {
      await updatePitchStatus(pitch.pitch_id, newStatus);
      setCurrentStatus(newStatus);
      if (onStatusUpdate) onStatusUpdate(pitch.pitch_id, newStatus);
    } catch (error) {
      console.error('Error updating pitch status:', error);
    }
  };

  return (
    <div className={`pitch-card ${currentStatus.toLowerCase()}`}>
      <div className="pitch-header">
        <h3>{pitch.title}</h3>
        <span className={`status-badge ${currentStatus.toLowerCase()}`}>
          {currentStatus}
        </span>
      </div>
      
      <div className="pitch-details">
        <p>{pitch.description}</p>
        <div className="pitch-metrics">
          <p><strong>Funding:</strong> ${pitch.funding.toLocaleString()}</p>
          <p><strong>Equity Offered:</strong> {pitch.equityOffered}%</p>
        </div>
        
        {pitch.videoURL && (
          <a href={pitch.videoURL} target="_blank" rel="noopener noreferrer" className="video-link">
            Watch Pitch Video
          </a>
        )}
      </div>

      {!isInvestorView && pitch.offers && pitch.offers.length > 0 && (
        <div className="offers-section">
          <button 
            className="toggle-offers-btn"
            onClick={() => setShowOffers(!showOffers)}
          >
            {showOffers ? 'Hide Offers' : `View Offers (${pitch.offers.length})`}
          </button>
          
          {showOffers && (
            <div className="offers-list">
              {pitch.offers.map(offer => (
                <OfferCard 
                  key={offer.offer_id} 
                  offer={offer} 
                  isEntrepreneurView={true}
                  onStatusUpdate={onStatusUpdate}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {!isInvestorView && currentStatus === 'OPEN' && (
        <button 
          className="btn-close-pitch"
          onClick={() => handleStatusUpdate('CLOSED')}
        >
          Close Pitch
        </button>
      )}
    </div>
  );
}