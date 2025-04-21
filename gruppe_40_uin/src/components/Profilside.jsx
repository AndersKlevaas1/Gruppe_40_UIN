import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity/client";
import "./Profilside.css"; // Legg til denne linja

const Profilside = () => {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "member" && slug.current == $slug][0]{
      name,
      image{
        asset->{
          url
        }
      },
      role,
      bio,
      email
    }`, { slug })
    .then(data => setProfile(data))
    .catch(console.error);
  }, [slug]);

  if (!profile) return <p>Laster profil...</p>;

  return (
    <div className="profil-container">
      {profile.image?.asset?.url && (
        <img src={profile.image.asset.url} alt={profile.name} className="profil-bilde" />
      )}
      <h2>{profile.name}</h2>
      <p><strong>Rolle:</strong> {profile.role}</p>
      <p><strong>E-post:</strong> {profile.email}</p>
      <p><strong>Om:</strong> {profile.bio}</p>
    </div>
  );
};

export default Profilside;
