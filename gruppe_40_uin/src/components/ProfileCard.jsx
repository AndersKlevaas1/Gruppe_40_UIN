import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import { Link } from "react-router-dom";
import { fetchProfileCard } from "../sanity/profilecardServices";
import "./ProfileCard.scss"; // 🔥 Importér SCSS-filen

const ProfileCard = ({ profiles }) => {
  return (
    <div className="profilecard-container">
      <h2>Profilkort</h2>

      <div className="profilecard-list">
        {profiles.map((profile) => (
          <div key={profile.slug?.current} className="profilecard-item">
            {profile.image?.asset?.url && (
              <img
                src={profile.image.asset.url}
                alt={profile.name}
              />
            )}
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <p>{profile.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
