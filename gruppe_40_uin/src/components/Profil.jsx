// components/Profile.jsx
import { useEffect, useState } from 'react';
import { client } from '../sanity/client'; // Sørg for at klienten er korrekt importert
import { useParams } from 'react-router-dom';
import './Profile.scss';

const Profile = () => {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "member" && slug.current == $slug][0]{
      name,
      email,
      image,
      logEntries[]->{
        task,
        date,
        description
      }
    }`, { slug })
    .then(data => {
      setProfile(data);
      setLogEntries(data.logEntries); // Hent loggføringer
    })
    .catch(console.error);
  }, [slug]);

  if (!profile) return <div>Laster profil...</div>;

  return (
    <div className="profile">
      <h2>{profile.name}</h2>
      <img src={profile.image.asset.url} alt={profile.name} />
      <p>{profile.email}</p>

      <h3>Loggføringer</h3>
      <ul>
        {logEntries.map((log, index) => (
          <li key={index}>
            <strong>{log.task}</strong> - {new Date(log.date).toLocaleDateString()}
            <p>{log.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
