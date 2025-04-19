import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient';
import './Header.scss';

const Header = () => {
  const [members, setMembers] = useState([]); 

  useEffect(() => {
    client.fetch(`*[_type == "member"]{name, slug}`).then((data) => {
      setMembers(data);
    });
  }, []);

  return (
    <header className="header">
      <h1>Gruppe 40</h1>
      <nav>
        <Link to="/">Hjem</Link>

        {members.map((member) => {
          const fornavn = member.name.split(' ')[0]; 
          const url = `/medlem/${member.slug.current}`; 
          return (
            <Link key={member.slug.current} to={url}>
              {fornavn}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;