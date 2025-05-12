import { useState, useEffect } from 'react';
import PitchCard from '../components/PitchCard';
import { getPitches, createPitch } from '../services/pitches';

export default function Entrepreneur({ user }) {
  const [pitches, setPitches] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoURL: '',
    funding: '',
    equityOffered: '',
    status: 'OPEN'
  });

  useEffect(() => {
    const fetchPitches = async () => {
      const data = await getPitches();
      setPitches(data.filter(p => p.user_id?.user_id === user.user_id));
    };
    fetchPitches();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPitch = await createPitch({
        ...formData,
        funding: parseFloat(formData.funding) || 0,
        equityOffered: parseFloat(formData.equityOffered) || 0,
        user_id: { user_id: user.user_id }
      });
      
      setPitches([...pitches, newPitch]);
      setFormData({
        title: '',
        description: '',
        videoURL: '',
        funding: '',
        equityOffered: '',
        status: 'OPEN'
      });
    } catch (error) {
      console.error('Error creating pitch:', error);
      alert('Failed to create pitch. Please try again.');
    }
  };

  return (
    <div className="page">
      <h1>Your Pitches</h1>
      
      <form onSubmit={handleSubmit} className="pitch-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Business name"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Detailed business description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Video URL:</label>
          <input
            type="url"
            name="videoURL"
            placeholder="https://example.com/pitch-video"
            value={formData.videoURL}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Funding Needed ($):</label>
            <input
              type="number"
              name="funding"
              placeholder="100000"
              value={formData.funding}
              onChange={handleChange}
              min="0"
              step="1000"
            />
          </div>
          
          <div className="form-group">
            <label>Equity Offered (%):</label>
            <input
              type="number"
              name="equityOffered"
              placeholder="10"
              value={formData.equityOffered}
              onChange={handleChange}
              min="0"
              max="100"
            />
          </div>
        </div>
        
        <button type="submit" className="submit-btn">Create Pitch</button>
      </form>
      
      <div className="pitches-grid">
        {pitches.length > 0 ? (
          pitches.map(pitch => (
            <PitchCard key={pitch.pitch_id} pitch={pitch} />
          ))
        ) : (
          <p className="no-pitches">You haven't created any pitches yet.</p>
        )}
      </div>
    </div>
  );
}