import { useState } from 'react';
import { updateOfferStatus } from '../services/offers';

export default function OfferCard({ offer, isEntrepreneurView = false, onStatusUpdate }) {
  const [status, setStatus] = useState(offer.status);

  const handleStatusUpdate = async (newStatus) => {
    try {
      await updateOfferStatus(offer.offer_id, newStatus);
      setStatus(newStatus);
      if (onStatusUpdate) onStatusUpdate(offer.offer_id, newStatus);
    } catch (error) {
      console.error('Error updating offer status:', error);
    }
  };

  return (
    <div className={`offer-card ${status.toLowerCase()}`}>
      <div className="offer-header">
        <h3>Offer #{offer.offer_id}</h3>
        <span className={`status-badge ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>
      
      <div className="offer-details">
        <p><strong>Investor:</strong> {offer.investorname}</p>
        <p><strong>Funding Amount:</strong> ${offer.fundingAmt.toLocaleString()}</p>
        <p><strong>Equity Requested:</strong> {offer.equityReq}%</p>
        {offer.additionalTerms && (
          <p><strong>Terms:</strong> {offer.additionalTerms}</p>
        )}
      </div>

      {isEntrepreneurView && status === 'PENDING' && (
        <div className="offer-actions">
          <button 
            className="btn-accept"
            onClick={() => handleStatusUpdate('ACCEPTED')}
          >
            Accept
          </button>
          <button 
            className="btn-reject"
            onClick={() => handleStatusUpdate('REJECTED')}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}