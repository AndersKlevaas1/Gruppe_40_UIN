import ProfileCard from "./components/ProfileCard";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchProfileCard } from "./sanity/profilecardServices";
import { useState, useEffect } from "react";
import ProfileDetail from "./components/ProfileDetail";



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

        {/* Eksempelruter - legg inn når dere er ferdige */}

        <Route path="/profil/:slug" element={<ProfileDetail />} />
        <Route path="/" element={<ProfileCard profiles={profiles}/>} />
        <Route path="/" element={<div>Forside</div>} />
        <Route path="/medlem/:slug" element={<div>Produktkort</div>} />
      </Routes>
    </Router>
  );
}

export default App;