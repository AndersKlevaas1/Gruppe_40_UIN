import ProfileCard from "./components/ProfileCard";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchProfileCard } from "./sanity/profilecardServices";
import { useState, useEffect } from "react";
import ProfileDetail from "./components/ProfileDetail";
import GroupLog from "./components/GroupLog"; 
import MemberLog from "./components/MemberLog"; 

function App() {
  const [profiles, setProfiles] = useState([]);

  const fetchProfilecard = async () => {
    const data = await fetchProfileCard()
    setProfiles(data)
  }

  useEffect(() => {
    fetchProfilecard()
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/profil/:slug" element={<ProfileDetail />} />
        <Route path="/" element={
          <>
            <ProfileCard profiles={profiles}/>
            <GroupLog />
          </>
        } />

        <Route path="/medlem/:slug" element={<div>Produktkort</div>} /> 
      </Routes>
    </Router>
  );
}

export default App;