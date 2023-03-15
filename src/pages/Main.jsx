import { useEffect, useState } from 'react';
import { CardsList } from 'components/CardsList';
import { getListOfCharacters } from 'services/api';

export const Main = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getListOfCharacters().then(setCharacters);
  }, []);

  return (
    <div>
      <img
        src="./images/poster_desktop_1x.png"
        className="poster_img"
        alt="poster of site"
        loading="lazy"
      />
      <form className="main_form">
        <button className="main_search_btn">
          <svg
            className="main_search-glass_svg"
            width="18px"
            height="18px"
            fill="rgba(0, 0, 0, 0.54)"
          >
            <use href="./images/sprite_icons.svg#icon-search"></use>
          </svg>
        </button>

        <input
          className="main_input"
          placeholder="Filter by name..."
          type="text"
          name="main_inpet_filter"
        ></input>
      </form>

      <CardsList characters={characters} />
    </div>
  );
};
