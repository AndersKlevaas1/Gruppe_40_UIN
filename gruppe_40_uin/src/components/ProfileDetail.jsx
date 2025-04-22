import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfileDetail } from '../sanity/profilecardServices';
import './ProfileDetail.scss'; 

const ProfileDetail = () => {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProfileDetail(slug)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Feil ved henting av profil:", error);
      });
  }, [slug]);

  if (loading) {
    return <div>Laster profil...</div>;
  }

  if (error) {
    return <div>Feil ved lasting av profil: {error.message}</div>;
  }

  if (!profile) {
    return <div>Fant ikke profil.</div>;
  }

  return (
    <div className="profile-detail-container">
      {profile.image?.asset?.url && (
        <img
          src={profile.image.asset.url}
          alt={profile.name}
          className="profile-image"
        />
      )}
      <h2 className="profile-name">{profile.name}</h2>
      {profile.biography && (
      <div className="profile-biography">
        <h3>Biografi</h3>
        <p>{profile.biography}</p>
      </div>
    )}
        
      {profile.interests && profile.interests.length > 0 && (
        <div className="profile-interests">
          <h3>Interesser</h3>
          <ul>
            {profile.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;