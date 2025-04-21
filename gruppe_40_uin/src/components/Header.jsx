import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanity/client'; //GJorde noen endringer her, skal dobbeltskjekke. Satte stor bookstav i filnavnet fordi jeg trodde det var case sensitivt der og, men skal endre det tilbake. Trenger en pause -Malene
import './Header.scss';

const Header = () => {
  const [members, setMembers] = useState([]); 

  useEffect(() => {
    client.fetch(`*[_type == "member"]{
      name,
      slug
    }`).then((data) => {
      setMembers(data);
    }).catch(console.error);
  }, []);
  
  return (
    <header className="header">
      <h1>Gruppe 40</h1>
      <nav>
        <Link to="/">Hjem</Link>
        <Link to="/">Bjørn</Link>
        <Link to="/">Malene</Link>
        <Link to="/">Mohammed</Link>
        <Link to="/">Andreas</Link>

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
