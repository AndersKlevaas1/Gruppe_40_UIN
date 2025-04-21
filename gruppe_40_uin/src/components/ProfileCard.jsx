import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import { Link } from "react-router-dom";
import { fetchProfileCard } from "../sanity/profilecardServices";
import "./ProfileCard.scss"; 

const ProfileCard = ({ profiles }) => {
  return (
    <div className="profilecard-container">
      <h2>Gruppemedlemmer</h2>

      <div className="profilecard-list">
        {profiles.map((profile, index) => (
          <div key={profile.slug?.current || profile._id || index} className="profilecard-item">  {/* https://chatgpt.com/share/68068b83-2994-800d-9210-e297958293b0 - malene */}
            {profile.image?.asset?.url && (
              <img
                src={profile.image.asset.url}
                alt={profile.name}
              />
            )}
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <p>{profile.bio}</p>
            <p>{profile.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;