import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient';

const Header = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "member"]{name, slug}`).then(setMembers);
  }, []);

  return (
    <header style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <h1>Gruppe 40</h1>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Hjem</Link>
        {members.map((m) => (
          <Link
            key={m.slug.current}
            to={`/medlem/${m.slug.current}`}
            style={{ marginRight: '1rem', color: 'white' }}
          >
            {m.name.split(' ')[0]}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
