import { useEffect, useState } from 'react';
import { CardsList } from 'components/CardsList';
import { LoadMoreBtn } from 'components/LoadMoreBtn';
import { getListOfCharacters, loadMoreCharactersFn } from 'services/api';

export const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getListOfCharacters().then(setCharacters);
  }, []);

  useEffect(() => {
    loadMoreCharactersFn(page).then(response => {
      setCharacters([...characters, ...response]);
    });
  }, [page]);

  const getfiltredCards = () => {
    const normilizedFilter = filter.toLowerCase();
    return characters.filter(character =>
      character.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const loadMoreCharacters = () => {
    setPage(page + 1);
  };

  console.log(page);

  return (
    <div className="main_page_wrapper">
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
          onChange={changeFilter}
          name="main_inpet_filter"
        ></input>
      </form>

      <CardsList characters={getfiltredCards()} />
      <LoadMoreBtn loadMore={loadMoreCharacters} />
    </div>
  );
};
