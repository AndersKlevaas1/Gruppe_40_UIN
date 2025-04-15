import React, { useState, useEffect } from "react";
import ProfileCard from "./components/Profilecard"; 
import { fetchProfileCard } from "./sanity/profilecardServices";

function App() {

  const [profilecard, setProfilecard] = useState([]);

  const getAllProfile = async () => {
    const data = await fetchProfileCard();
    setProfilecard(data);
  };

  useEffect(() => {
    getAllProfile();
  }, [])

    return (
    <main>
        <h1>Profilkort</h1>
        {profilecard.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
    ))}
  </main>
  );
}

export default App;