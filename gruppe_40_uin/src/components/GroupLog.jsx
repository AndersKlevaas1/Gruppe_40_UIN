import React, { useState, useEffect } from 'react';
import { client } from '../sanity/client';
import './GroupLog.scss'; 
const GroupLog = () => {
  const [groupLog, setGroupLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client.fetch(`
      *[_type == "profilecard"] {
        name,
        log[] {
          date,
          entry,
          time
        }
      }
    `)
      .then((data) => {

        const allLogs = data.reduce((acc, member) => {
          if (member.log) {
            return acc.concat(member.log.map(logEntry => ({ ...logEntry, memberName: member.name })));
          }
          return acc;
        }, []);


        allLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

        setGroupLog(allLogs);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Feil ved henting av gruppelog:", error);
      });
  }, []);

  if (loading) {
    return <div>Laster gruppelog...</div>;
  }

  if (error) {
    return <div>Feil ved lasting av gruppelog: {error.message}</div>;
  }

  if (groupLog.length === 0) {
    return <div>Ingen loggføringer funnet for gruppen.</div>;
  }

  return (
    <div className="group-log-container">
      <h2>Gruppens Samlede Logg</h2>
      <ul>
        {groupLog.map((logEntry, index) => (
          <li key={index}>
            <strong>{logEntry.memberName}:</strong> {logEntry.date} - {logEntry.entry} ({logEntry.time} timer)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupLog;