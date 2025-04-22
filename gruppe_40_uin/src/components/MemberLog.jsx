import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../sanity/client';
import './MemberLog.scss'; 

const MemberLog = () => {
  const { slug } = useParams();
  const [memberLog, setMemberLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client.fetch(`
      *[_type == "profilecard" && profilecardslug.current == $slug][0] {
        name,
        log[] {
          date,
          entry,
          time
        }
      }
    `, { slug })
      .then((data) => {
        setMemberLog(data?.log || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error(`Feil ved henting av logg for ${slug}:`, error);
      });
  }, [slug]);

  if (loading) {
    return <div>Laster logg...</div>;
  }

  if (error) {
    return <div>Feil ved lasting av logg: {error.message}</div>;
  }

  if (memberLog.length === 0) {
    return <div>Ingen loggføringer funnet for denne personen.</div>;
  }

  return (
    <div className="member-log-container">
      <h3>Loggføringer</h3>
      <ul>
        {memberLog.map((logEntry, index) => (
          <li key={index}>
            {logEntry.date} - {logEntry.entry} ({logEntry.time} timer)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberLog;