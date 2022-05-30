import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { restAPI } from "../../api/api";
import CatCard from "../../components/CatCard/CatCard";

import "./Home.css";
const Home = () => {
  const [page, setPage] = useState(1);
  const [cats, setCats] = useState();
  const [favorite, setFavorite] = useState(false);
  let state = useSelector((store) => store.favoriteCats);

  cats
    ? console.log("")
    : restAPI
        .getCats(page)
        .then((result) => {
          setCats(result);
        })
        .catch((error) => {
          return error;
        });

  return (
    <div className="home">
      <div className="cats">
        {cats ? (
          cats.map((cat) => {
            let isFavorite = false;

            state.some((stateCat) => stateCat.id === cat.id)
              ? (isFavorite = true)
              : (isFavorite = false);

            return (
              <CatCard
                isFavorite={isFavorite}
                favorite={favorite}
                setFavorite={setFavorite}
                cat={cat}
                key={cat.id}
              />
            );
          })
        ) : (
          <div>...загружаем еще котиков...</div>
        )}
      </div>

      <div className="loadMore">...загружаем еще котиков...</div>
    </div>
  );
};

export default Home;
