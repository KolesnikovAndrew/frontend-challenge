import React, { useEffect, useState } from "react";
import CatCard from "../../components/CatCard/CatCard";
import { useSelector } from "react-redux";

function Favorites() {
  const [favoriteCats, setFavoriteCats] = useState();
  let state = useSelector((store) => store.favoriteCats);

  return (
    <div className="cats">
      {state ? (
        state.map((cat) => {
          let isFavorite = true;

          return <CatCard cat={cat} key={cat.id} isFavorite={isFavorite} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Favorites;
