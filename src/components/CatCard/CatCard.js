import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./CatCard.css";
import EmptyHearth from "../../assets/EmptyHearth.png";
import FillHearth from "../../assets/FillHearth.png";

function CatCard({ cat, isFavorite }) {
  const dispatch = useDispatch();

  function onClickHandle() {
    isFavorite
      ? dispatch({ type: "REMOVE_FAVORITE_CAT", cat })
      : dispatch({ type: "ADD_FAVORITE_CAT", cat });
  }

  return (
    <div className="cat" style={{ backgroundImage: `url(${cat.url})` }}>
      <div className="cardBottom">
        <div className="addToFavoriteBorder">
          <img
            src={isFavorite ? FillHearth : EmptyHearth}
            className="addToFavorite"
            onMouseOver={(e) => (e.currentTarget.src = FillHearth)}
            onMouseLeave={(e) =>
              (e.currentTarget.src = isFavorite ? FillHearth : EmptyHearth)
            }
            onClick={onClickHandle}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CatCard;
