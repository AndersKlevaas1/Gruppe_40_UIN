import Header from '../components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Eksempelruter – resten av gruppa setter dette opp */}
        <Route path="/" element={<div>Forside</div>} />
        <Route path="/medlem/:slug" element={<div>Medlemsside</div>} />
      </Routes>
    </Router>
  );
}

export default App;
