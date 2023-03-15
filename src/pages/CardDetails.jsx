import { getOneCharacterById } from 'services/api';
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CardDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOneCharacterById(Number(id)).then(setCharacter);
    // .catch(err => setError(err.response.data.status_message));
    // .finally(() => setIsLoading(false));
  }, [id]);

  console.log(getOneCharacterById(Number(id)));

  return (
    <div>
      <img
        src={character.image}
        className="details_poster_img"
        alt="view character"
        loading="lazy"
      />
      <p className="details_character_name">{character.name}</p>
      <p className="details_character_subtitle">Informations</p>
      <ul className="details_character_descriptions-list">
        <li className="details_character_descroptions-item">
          <span>Gender: {character.gender}</span>
        </li>

        <li className="details_character_descroptions-item">
          <span>Status: {character.status}</span>
        </li>

        <li className="details_character_descroptions-item">
          <span>Specie:{character.species}</span>
        </li>

        <li className="details_character_descroptions-item">
          <span>Origin:{character.origin.name}</span>
        </li>

        <li className="details_character_descroptions-item">
          <span>Type:{character.type}</span>
        </li>
      </ul>
    </div>
  );
};
