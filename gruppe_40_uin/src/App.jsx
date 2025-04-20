import ProfileCard from "./components/ProfileCard";
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Eksempelruter - legg inn når dere er ferdige */}
        <Route path="/" element={<ProfileCard />} />
        <Route path="/" element={<div>Forside</div>} />
        <Route path="/medlem/:slug" element={<div>Produktkort</div>} />
      </Routes>
    </Router>
  );
}

export default App;