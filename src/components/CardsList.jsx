import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const CardsList = ({ characters }) => {
  const location = useLocation();

  characters.sort((first, second) => first.name.localeCompare(second.name));

  return (
    <div className="main_cardsList_wrapper">
      <ul className="main_cards_list">
        {characters.map(character => (
          <li className="main_carachter_item" key={character.id}>
            <Link
              className="main_wrapper_card"
              to={`/character_card/${character.id}`}
              state={{ from: location }}
            >
              <img
                className="main_card_img"
                src={character.image}
                alt="character poster"
              />
              <p className="cardList_name_of_character">{character.name}</p>
              <p className="cardlist_species_of_character">
                {character.species}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
