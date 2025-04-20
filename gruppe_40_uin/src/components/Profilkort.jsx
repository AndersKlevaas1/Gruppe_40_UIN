import { useEffect, useState } from 'react';
import './Profilkort.scss'; 

//Må fikse på dette....
const Profilkort = () => {
    const [medlemmer, setMedlemmer] = useState([]);

    useEffect(() => {
        client
          .fetch(`*[_type == "member"]{name, email, image, slug}`)
          .then((data) => {
            setMedlemmer(data);
          });
      }, []);
    
        return (
            <div className="profilkort-container">
              {medlemmer.map((medlem) => (
                <div className="profilkort" key={medlem.slug.current}>
                  <img src={medlem.image.asset.url} alt={medlem.name} />
                  <h2>{medlem.name}</h2>
                  <p>{medlem.email}</p>
                </div>
              ))}
            </div>
          );
        };

export default Profilkort;