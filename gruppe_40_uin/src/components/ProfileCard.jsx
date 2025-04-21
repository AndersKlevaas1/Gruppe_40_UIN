import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import  { Link } from "react-router-dom"; // Importer Link fra react-router-dom for navigering
import { fetchProfileCard } from "../sanity/profilecardServices"; // Importer tjenesten for å hente profilkortdata

const ProfileCard = ({profiles}) => {
  
  /*useEffect(() => {
    client.fetch(`*[_type == "member"]{
      name,
      slug,
      image{
        asset->{
          url
        }
      },
      role,
      bio
    }`).then((data) => {
      setProfiles(data);
    }).catch(console.error);
  }, []);
  */

  return ( //Tenker å endre på det her - malene 
    <div>
      <h2>Profilkort</h2>
      <div></div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {profiles.map((profile) => (
          <div key={profile.slug?.current} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "200px" }}>
            {profile.image?.asset?.url && (
              <img src={profile.image.asset.url} alt={profile.name} style={{ width: "100%", borderRadius: "8px" }} />
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