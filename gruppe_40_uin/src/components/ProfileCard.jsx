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
        {profiles.map((profile, index) => {
            console.log("Profil-data:", profile);

          const slug = profile.slug?.current || profile._id || index;
          
          return (
            
            <Link
            key={slug}
            to={`/profil/${profile.profilecardslug?.current}`} 
            className="profilecard-item"
            >
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
